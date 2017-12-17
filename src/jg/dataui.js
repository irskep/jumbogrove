import _ from 'lodash';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
import nunjucks from 'nunjucks';

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
     * {@link MarkdownIt} instance used to render Markdown. You may use it
     * to register additional plugins.
     * @type {MarkdownIt}
     */
    this.md = new MarkdownIt({html: true, linkify: false, typographer: true});
    this.md.use(MarkdownItAttrs);

    /**
     * {@link nunjucks} instance used to render templates. You may use it
     * to add custom tags, filters, or globals. (See [the "Environment" section
     * of this page.](https://mozilla.github.io/nunjucks/api.html))
     */
    this.nunjucks = new nunjucks.Environment([], {
      autoescape: false,
      tags: {
        commentStart: '{##',
        commentEnd: '##}',
      },
    });

    /**
     * You may replace this property if you want to use a template
     * language other than [Nunjucks](https://mozilla.github.io/nunjucks/).
     * 
     * It is a function that takes a string and returns a function that takes
     * attrs and returns a rendered string. Like this:
     * 
     * ```
     * (src) => (attrs) => render(src, attrs)
     * ```
     * @param {function(src: string): function} src 
     */
    this.createTemplate = (src) => (attrs) => {
      return this.nunjucks.renderString(src, attrs);
    };

    /** @ignore */
    this.templateHelperFunctions = {};
  }

  /**
   * Make the given objects or values available to the template context.
   * @param {Map<string, function>} fns 
   */
  addTemplateContext(fns) {
    this.templateHelperFunctions = {...this.templateHelperFunctions, ...fns};
  }

  /**
   * Whenever a template is rendered, evaluate all these functions and make their
   * return values available to the template context.
   * 
   * **All template getters are called whenever you render any template.**
   * 
   * @example
   * 
   * // If you add a getter like this:
   * jumbogrove.jumbogrove('#game', {
   *   init: (model, ui) => {
   *     ui.addTemplateGetters({
   *       randomNumber: () => Math.random()
   *     });
   *   }
   * });
   * 
   * // Then you may use it in a template like this:
   * 
   * `
   * {{ randomNumber }}
   * `
   * 
   * // and it will show the function's return value (in this case, a random
   * // number 0-1).
   * 
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
    return {
      ...this.director.model.globalState,
      ...this.director.model,
      ...getters,
      ...this.templateHelperFunctions,
      model: this.director.model,
      ui: this,
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
      return this.createTemplate(src)({...args, ...this.templateContext()});
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
   * 
   * The output comes after ALL HTML in the current section, If you are
   * presenting a choice, the HTML will be written BELOW the choice.
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
   * 
   * The output comes after ALL HTML in the current section, If you are
   * presenting a choice, the text will be written BELOW the choice.
   * @param {string} markdown 
   * @param {Map<string,*>} args Additional template context
   */
  writeMarkdown(markdown, args = null) {
    this.append({
      'type': 'html',
      html: this.renderMarkdownTemplate(markdown, args)});
  }

  /**
   * Render the given HTML as a template and write it to the transcript
   * WITHIN THE CURRENT SECTION. If you are writing HTML from inside
   * an action function, this is probably what you want.
   * 
   * @param {string} markdown 
   * @param {Map<string,*>} args Additional template context
   */
  write(markdown, args) {
    if (this.director.activeItemId !== null) {
      this.bus.$emit('write', {
          'itemId': this.director.activeItemId,
          'html': this.renderMarkdownTemplate(markdown, args),
      });
    } else {
      this.writeMarkdown(markdown, args);
    }
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