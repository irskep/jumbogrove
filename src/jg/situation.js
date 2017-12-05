import _ from 'lodash';

const nop = () => { };
const tru = () => true;
/**
 * This object represents a Situation defined by your game. You don't create it directly,
 * but it is passed to some of your callbacks for convenience.
 */
export default class Situation {
    /** @ignore */
    constructor({
        id,
        tags = [],
        totalVisits = 0,
        autosave = false,
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
        // str (rendered as HTML before enter() called)
        content = null,
        // [str] (if specified, presentChoices() will happen automatically)
        choices = null,
        snippets = {},
        input = null,
        debugChoices = false,
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