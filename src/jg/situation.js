import _ from 'lodash';

const nop = () => { };
const tru = () => true;
/**
 */
export default class Situation {
    /**
     * 
     * @param {object} args
     * @param {string} args.id
     * @param {Boolean} args.autosave If true, game will save when scene is
     *                                entered. Default false.
     * @param {string} args.content
     *      Markdown template to be rendered to the transcript when this
     *      situation is entered. {@see /markup.html}
     * @param {string[]} args.choices
     *      List of situation IDs or tags. See
     *      {@link model#interpretChoices} for how this works.
     * @param {Map<string,string>} args.snippets
     *      Snippets used by writers/replacers. {@see /writers_replacers.html}.
     * @param {object|null} args.input 
     *      If provided, prompts user for input. Looks like
     *      `input: {placeholder: "Your name", next: "situation-id", store: function(model, value)}`
     * @param {string|null} args.input.placeholder
     *      Placeholder value for the HTML input field 
     * @param {string} args.input.next
     *      Situation or action to go to after user enters a value.
     *      Must start with either `@` (for situation IDs) or `>`
     *      (for actions).
     * @param {function(model: model, value: string)} args.input.store
     *      Your chance to do something with the given alue
     * @param {Boolean} args.debugChoices See {@link debugChoices}
     * @param {function(model: model, hostSituation: Situation): Boolean} getCanChoose
     *      If this function is provided and returns `false`, this situation
     *      is not linkified in the choices list.
     * @param {function(model: model, hostSituation: Situation): Boolean} getCanSee
     *      If this function is provided and returns `false`, the situation
     *      will not show up in the choices list for the situation presenting
     *      the choice.
     * @param {number|function(model: model, hostSituation: Situation): number} priority
     *      May be a constant number, or function returning a number. This value
     *      is used by {@link model#interpretChoices}.
     * @param {number|function(model: model, hostSituation: Situation): number} displayOrder
     *      May be a constant number, or function returning a number. This value
     *      is used by {@link model#interpretChoices}.
     * @param {string|function(model: model, hostSituation: Situation): string} optionText
     *      Text shown to user when being presented as a choice.
     * @param {function(model: model, ui: ui, fromSituation: Situation): Boolean} willEnter
     *      This situation will enter, unless this function returns `false`. It
     *      is safe to call `model.do()` from here, as long as you then return
     *      `false`.
     * @param {function(model: model, ui: ui, fromSituation: Situation)} enter
     *      The situation has been entered, and {@link Situation#content} has
     *      been written to the transcript.
     * @param {function(model: model, ui: ui, toSituation: Situation)} exit
     *      The situation is being exited, but the next situation has not yet
     *      been entered.
     * @param {function(model: model, ui: ui, action: String)} act
     *      An action-based link has been clicked. You might just want to use
     *      the `actions` key instead of this function if you're just mapping
     *      action names to functions.
     * @param {Map<string,function>} actions
     *      Map of action name to function that is called when the user invokes
     *      the action.
     * 
     * @example
     *  jumbogrove('#app', {
     *      id: 'situations-example',
     *      autosave: true,
     * 
     *      // stuff related to this situation being a choice in another situation:
     *      optionText: "Proclaim hungriness",
     *      getCanChoose: (model, host) => true,
     *      getCanSee: (model, host) => true,
     *      priority: 1,
     *      displayOrder: 1,
     * 
     *      // stuff related to content and what happens inside the situation:
     *      content: `
     *      I am [very](>replaceself:more_adjectives) hungry.
     * 
     *      [Eat](>eat)
     * 
     *      [Go to restaurant](@restaurant)
     *      `,
     *      snippets: {
     *          more_adjectives: "very, very, very, very"
     *      },
     *      act: (model, ui, action) => console.log("did action", action),
     *      actions: {
     *          eat: () => console.log("OM NOM NOM"),
     *      },
     * 
     *      // going to other situations:
     *      choices: ['next-situation', '#situations-involving-food'],
     *      // normally you wouldn't have 'choices' and 'input' in the same situation.
     *      input: {
     *          placeholder: "Please enter your favorite food.",
     *          next: "@restaurant",
     *      },
     *      debugChoices: false,
     * 
     *      // lifecycle
     *      willEnter: (model, ui, from) => true,
     *      enter: (model, ui, from) => console.log("entered"),
     *      exit: (model, ui, from) => console.log("exited"),
     *  });
     */
    constructor({
        id,
        tags = [],
        totalVisits = 0,
        autosave = false,
        // str (rendered as HTML before enter() called)
        content = null,
        // [str] (if specified, presentChoices() will happen automatically)
        choices = null,
        snippets = {},
        input = null,
        debugChoices = false,
        // (model, hostSituation)
        getCanChoose = tru,
        // (model, hostSituation)
        getCanSee = tru,
        // number or (model, hostSituation)
        priority = 0,
        // number or (model, hostSituation)
        displayOrder = 0,
        // str or (model, hostSituation)
        optionText = null,
        // (model, ui, fromSituation)
        willEnter = tru,
        // (model, ui, fromSituation)
        enter = nop,
        // (model, ui, action)
        act = nop,
        // {actionId: (model, ui) => Void}
        actions = {},
        // (model, ui, toSituation)
        exit = nop,
    }) {
        /**
         * ID of this situation.
         * @type {string}
         */
        this.id = id;

        /**
         * Tags associated with this situation.
         * @type {string[]}
         */
        this.tags = tags;

        /**
         * Number of times this situation has been successfully entered.
         * This value persists when saving and loading.
         * @type {number}
         */
        this.totalVisits = totalVisits;

        /**
         * If `true`, then presenting choices from this situation will call `debugger`
         * so you can step through the code and see what's up.
         * @type {Boolean}
         */
        this.debugChoices = debugChoices;

        Object.assign(this, {
            getCanChoose, getCanSee, priority,
            displayOrder, optionText, enter, act, exit, content, actions, choices,
            snippets, input, willEnter, autosave,
        });
    }

    /**
     * Returns `true` if this situation has the given tag, otherwise `false`.
     * @param {string} tag The tag to check for
     * @returns {bool}
     */
    hasTag(tag) {
        return this.tags.indexOf(tag) !== -1;
    }

    /** @ignore */
    toSave() {
        return _.pick(this, ['totalVisits', 'id']);
    }

    /** @ignore */
    loadSave(obj) {
        _.assign(this, obj);
    }

    /** @ignore */
    doEnter(model, ui) {
        this.totalVisits += 1;
        if (this.content) {
            ui.writeMarkdown(this.content);
        }
        this.enter.apply(this, arguments);
        if (this.input) {
            ui.promptInput({placeholder: this.input.placeholder})
                .then((value) => { 
                    this.input.store(model, value);
                    model.do(this.input.next);
                });
        }
        if (this.choices) {
            ui.presentChoices(this.choices).then(({situationId, itemId}) => {
                model.do(`@${situationId}`, itemId, 'fake');
            });
        }
    }

    /** @ignore */
    doExit(model, ui, toSituation) {
        ui.nextGroup();
        this.exit.apply(this, arguments);
    }

    /** @ignore */
    doAct(model, ui, action, ...args) {
        if (this.actions && this.actions[action]) {
            this.actions[action](model, ui, ...args);
        } else {
            this.act(model, ui, action);
        }
    }

    /** @ignore */
    getOptionText() {
        if (_.isFunction(this.optionText)) {
            return this.optionText.apply(this, arguments);
        } else {
            return this.optionText || this.id;
        }
    }

    /** @ignore */
    getPriority() {
        if (_.isFunction(this.priority)) {
            return this.priority.apply(this, arguments);
        } else {
            return this.priority;
        }
    }

    /** @ignore */
    getDisplayOrder() {
        if (_.isFunction(this.displayOrder)) {
            return this.displayOrder.apply(this, arguments);
        } else {
            return this.displayOrder;
        }
    }
}