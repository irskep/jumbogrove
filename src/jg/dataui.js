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

    this.md = new MarkdownIt();
    this.md.use(MarkdownItAttrs);

    this.templateHelperFunctions = {
      ifThen: (condition, snippetTrue, snippetFalse) => {
        return this.director.getSnippet(condition ? snippetTrue : snippetFalse);
      },
    }
  }

  bind(director) {
    this.director = director;
  }

  templateContext() {
    return {
      ...this.director.model,
      model: this.director.model,
      ui: this,
      ...this.templateHelperFunctions,
    };
  }

  renderMarkdown(text, inline = false) {
    if (inline) {
      return this.md.renderInline(normalizeIndent(text));
    } else {
      return this.md.render(normalizeIndent(text));
    }
  }

  renderTemplate(src, args = null) {
    return _.template(src)({...args, ...this.templateContext()});
  }

  renderMarkdownTemplate(src, args = null, inline = false) {
    return this.renderMarkdown(this.renderTemplate(src, args), inline);
  }

  renderMarkdownTemplateMaybeInline(src, args = null) {
    const inline = src.indexOf('\n\n') === -1;
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
    item.id = _.uniqueId();
    item.groupId = this.currentGroupId;
    this.content.push(item);
    this.currentItemId = item.id;
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
        choices: this.director.interpretChoices(choices),
      };
      item.callback = (situationId) => {
        item.situationId = situationId;
        resolve(situationId);
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