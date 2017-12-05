import _ from 'lodash';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
/**
 * @external {MarkdownIt} https://github.com/markdown-it/markdown-it
 */

 /** @ignore */
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

/**
 * Direct access to the HTML transcript.
 */
export default class ui {
  /** @ignore */
  constructor() {
    /** @ignore */
    this.content = [];
    /** @ignore */
    this.currentItemId = null;
    /** @ignore */
    this.currentGroupId = 0;
    /** @ignore */
    this.nextItemId = 0;
    /** @ignore */
    this.templateHelperGetters = {};

    /**
     * `MarkdownIt` instance used to render Markdown. You may register additional plugins here.
     * @type {MarkdownIt}
     */
    this.md = new MarkdownIt({html: true, linkify: false, typographer: true});
    this.md.use(MarkdownItAttrs);

    /** @ignore */
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

  /**
   * Make the given functions (or constants) available to the template context.
   * @param {Map<string, function>} fns 
   */
  addTemplateFunctions(fns) {
    this.templateHelperFunctions = {...this.templateHelperFunctions, ...fns};
  }

  /**
   * Whenever a template is rendered, evaluate all these functions and make their
   * return values available to the template context.
   * @param {Map<string, function>} fns 
   */
  addTemplateGetters(fns) {
    this.templateHelperGetters = {...this.templateHelperGetters, ...fns};
  }

  /** @ignore */
  bind(director) {
    this.director = director;
  }

  /** @ignore */
  templateContext() {
    const getters = {};
    for (const k of Object.keys(this.templateHelperGetters)) {
      getters[k] = this.templateHelperGetters[k]();
    }
    for (const k of Object.keys(this.director.model.templateHelperGetters)) {
      getters[k] = this.director.model.templateHelperGetters[k]();
    }
    return {
      ...this.director.model,
      model: this.director.model,
      ui: this,
      ...getters,
      ...this.templateHelperFunctions,
      ...this.director.model.templateHelperFunctions,
    };
  }

  /**
   * Render the given Markdown text to HTML. Automatically dedents the text to the 
   * minimum indent level.
   * @param {string} text 
   * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
   */
  renderMarkdown(text, inline = false) {
    if (inline) {
      // console.log('inline', text, '---', this.md.renderInline(normalizeIndent(text)))
      return this.md.renderInline(normalizeIndent(text));
    } else {
      // console.log('div', text, '---', this.md.render(normalizeIndent(text)));
      return this.md.render(normalizeIndent(text));
    }
  }

  /**
   * Process the text as a template and return the result.
   * @param {string} src 
   * @param {Map<string,*>|null} args Additional template context
   */
  renderTemplate(src, args = null) {
    try {
      return _.template(src)({...args, ...this.templateContext()});
    } catch (e) {
      console.error(src)
      throw e;
    }
  }

  /**
   * Process the text as a template, render the resulting Markdown to HTML, and
   * return the result. Automatically dedents the text to the minimum indent level.
   * @param {string} src 
   * @param {Map<string,*>} args Additional template context
   * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
   */
  renderMarkdownTemplate(src, args = null, inline = false) {
    return this.renderMarkdown(this.renderTemplate(src, args), inline);
  }

  /**
   * Like {@link renderMarkdownTemplate}, but automatically sets `inline` flag based on
   * presence of line breaks.
   * @param {string} src 
   * @param {Map<string,*>} args Additional template context
   * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
   */
  renderMarkdownTemplateMaybeInline(src, args = null) {
    const inline = src.indexOf('\n') === -1;
    return this.renderMarkdownTemplate(src, args, inline);
  }

  /** @ignore */
  nextGroup() {
    this.currentGroupId += 1;
  }

  /** @ignore */
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
   * @ignore
   */
  encode(s) {
    return window.encodeURIComponent;
  }

  /**
   * Render the given HTML as a template and write it to the transcript.
   * Links are automatically bound to actions and situation transitions.
   * @param {string} html 
   * @param {Map<string,*>} args Additional template contet
   */
  writeHTML(html, args = null) {
    this.append({
      'type': 'html',
      html: this.renderTemplate(html, args),
    });
  }

  /**
   * Render the given string as a template, render the resulting Markdown as HTML, and
   * write it to the transcript.
   * @param {string} markdown 
   * @param {Map<string,*>} args Additional template context
   */
  writeMarkdown(markdown, args = null) {
    this.append({
      'type': 'html',
      html: this.renderMarkdownTemplate(markdown, args)});
  }

  /**
   * Given an array of tags or situation IDs (can be both in the same array), present
   * the relevant choices in the transcript using the logic in {@link model.interpretChoices}.
   * @param {string[]} arrayOfSituationIdsOrTags Array of strings containing either `#tags` or `situation-ids`.
   */
  presentChoices(arrayOfSituationIdsOrTags) {
    return new Promise((resolve, reject) => {
      const item = {
        'type': 'choice',
        choices: this.director.model.interpretChoices(arrayOfSituationIdsOrTags),
      };
      item.callback = (situationId) => {
        item.situationId = situationId;
        resolve({situationId, itemId: item.id});
      };
      this.append(item);
    });
  }

  /**
   * Force the user to enter some text to continue.
   * @param {Map<string,*>} options
   * @param {string} options.placeholder Placeholder text for the input field
   * @returns {Promise<string>}
   */
  promptInput({placeholder}) {
    return new Promise((resolve, reject) => {
      this.append({'type': 'input', placeholder, callback: resolve});
    })
  }
}