import _ from 'lodash';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';

function normalizeIndent(text) {
  if (!text) return text;

  var lines = _.trimEnd(text).split('\n');
  var indents = lines
    .filter((l) => l !== '') // Ignore empty lines
    .map((l) => l.match(/^\s+/))
    .map(function (m) {
      if (m === null) return '';
      return m[0];
    });
  if (!indents.length) return text;
  var smallestIndent = indents.reduce(function(max, curr) {
    if (curr.length < max.length) return curr;
    return max;
  }); // Find the "bottom" indentation level
  return lines.map(function (l) {
    return l.replace(new RegExp('^' + smallestIndent), '');
  }).join('\n');
}

export default class DataUI {
  constructor() {
    this.content = [];
    this.currentItemId = null;
    this.currentGroupId = 0;

    this.md = new MarkdownIt({html: true, linkify: false, typographer: true});
    this.md.use(MarkdownItAttrs);

    this.nextItemId = 0;

    this.templateHelperGetters = {};

    this.templateHelperFunctions = {
      ifThen: (condition, snippetTrue, snippetFalse) => {
        return this.director.getSnippet(condition ? snippetTrue : snippetFalse);
      },
      list: (conjunction, ...items) => {
        if (items.length < 1) return '';
        if (items.length === 1) return items[0];
        return `${_.initial(items).join(', ')}, ${conjunction} ${_.last(items)}`;
      },
      listWithAction: (action, conjunction, ...items) => {
        if (items.length < 1) return '';
        items = items.map((item) => `[${item}](>${action}:${window.encodeURIComponent(item)})`)
        if (items.length === 1) return items[0];
        return `${_.initial(items).join(', ')}, ${conjunction} ${_.last(items)}`;
      },
    }
  }

  addTemplateFunctions(fns) {
    this.templateHelperFunctions = {...this.templateHelperFunctions, ...fns};
  }

  addTemplateGetters(fns) {
    this.templateHelperGetters = {...this.templateHelperGetters, ...fns};
  }

  bind(director) {
    this.director = director;
  }

  simulateLink() {
    this.director.handleCommandString.apply(this.director, arguments);
  }

  templateContext() {
    const getters = {};
    for (const k of Object.keys(this.templateHelperGetters)) {
      getters[k] = this.templateHelperGetters[k]();
    }
    return {
      ...this.director.model,
      model: this.director.model,
      ui: this,
      ...getters,
      ...this.templateHelperFunctions,
    };
  }

  renderMarkdown(text, inline = false) {
    if (inline) {
      // console.log('inline', text, '---', this.md.renderInline(normalizeIndent(text)))
      return this.md.renderInline(normalizeIndent(text));
    } else {
      // console.log('div', text, '---', this.md.render(normalizeIndent(text)));
      return this.md.render(normalizeIndent(text));
    }
  }

  renderTemplate(src, args = null) {
    try {
      return _.template(src)({...args, ...this.templateContext()});
    } catch (e) {
      console.error(src)
      throw e;
    }
  }

  renderMarkdownTemplate(src, args = null, inline = false) {
    return this.renderMarkdown(this.renderTemplate(src, args), inline);
  }

  renderMarkdownTemplateMaybeInline(src, args = null) {
    const inline = src.indexOf('\n') === -1;
    return this.renderMarkdownTemplate(src, args, inline);
  }

  qualitiesHTML(character = null) {
    return this.renderTemplate(`
      <ul class="CharacterQualities">
        <% character.sortedQualityGroups.forEach((group) => { %>
          <% if (group.hidden) return; %>
          <li>
            <h3><%- group.name %></h3>
            <ul class="CharacterQualityGroup">
              <% character.sortedQualities(group.id).forEach((quality) => { %>
                <% if (quality.hidden) return; %>
                <% if (quality.type == 'flag' && !quality.value) return; %>

                <% if (quality.type == 'flag') { %>
                  <li><%- character.formatQuality(quality.id) %></li>
                <% } else { %>
                  <li><strong><%- quality.name %>:</strong> <%- character.formatQuality(quality.id) %></li>
                <% } %>
              <% }); %>
            </ul>
          </li>
        <% }); %>
      </ul>
    `, {character: character || this.director.model.player});
  }

  nextGroup() {
    this.currentGroupId += 1;
  }

  append(item) {
    item.id = this.nextItemId;
    this.nextItemId += 1;
    item.groupId = this.currentGroupId;
    this.content.push(item);
    this.currentItemId = item.id;
  }

  /**
   * Encode the given string so it doesn't mess up Markdown link parsing
   * @param {String} s 
   */
  encode(s) {
    return window.encodeURIComponent;
  }

  logHTML(html, args = null) {
    this.append({
      'type': 'html',
      html: this.renderTemplate(html, args),
    });
  }

  logMarkdown(markdown, args = null) {
    this.append({
      'type': 'html',
      html: this.renderMarkdownTemplate(markdown, args)});
  }

  presentChoices(choices) {
    return new Promise((resolve, reject) => {
      const item = {
        'type': 'choice',
        choices: this.director.model.interpretChoices(choices),
      };
      item.callback = (situationId) => {
        item.situationId = situationId;
        resolve({situationId, itemId: item.id});
      };
      this.append(item);
    });
  }

  promptInput({placeholder}) {
    return new Promise((resolve, reject) => {
      this.append({'type': 'input', placeholder, callback: resolve});
    })
  }
}