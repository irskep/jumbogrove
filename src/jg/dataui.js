import _ from 'lodash';
import MarkdownIt from 'markdown-it';

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
  }

  bind(director) {
    this.director = director;
  }

  renderMarkdown(text) {
    return this.md.render(normalizeIndent(text));
  }

  templateContext() {
    return {
      ...this.director.model,
      model: this.director.model,
      logQualities: this.logQualities.bind(this),
    };
  }

  logQualities(character = null) {
    this.logHTML(`
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

  renderTemplate(src, args = null) {
    return _.template(src)({...args, ...this.templateContext()});
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
      html: this.renderMarkdown(this.renderTemplate(markdown, args))});
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