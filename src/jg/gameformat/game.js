/**
 * The object you pass to the {@link jumbogrove} function.
 * 
 * @example
 * const game = {
 *     id: 'jg-example',
 *     version: 1,
 *     globalState: {
 *         aliensHaveInvaded: false,
 *     },
 *     willEnter: (model, ui, previousId, nextId) => {
 *         console.log("Transitioning from", previousId, "to", nextId);
 *     },
 * };
 * jumbogrove('#app', game);
 */
class game {
    /** @ignore */
    constructor() {
        /**
         * An ID unique to your game. Used to determine save location.
         * @type {string}
         */
        this.id = null;

        /**
         * The current version of your game. Used to determine save location.
         * @type {number}
         */
        this.version = null;

        /**
         * The ID of the first situation you want to show the player.
         * @type {string}
         */
        this.initialSituation = 'start';

        /**
         * If you set this to `false`, the left sidebar will not be shown.
         * Default `true`.
         * @type {Boolean}
         */
        this.showNav = true;

        /**
         * If you set this to `false`, the right sidebar will not be shown.
         * Default `true`.
         * @type {Boolean}
         */
        this.showAside = true;

        /**
         * If you set this to `false`, fewer styles will be applied to
         * the HTML.
         * Default `true`.
         * @type {Boolean}
         */
        this.defaultStylesheet = true;

        /**
         * If you set this to `false`, the browser will not scroll as new text
         * is added.
         * Default `true`.
         * @type {Boolean}
         */
        this.autoScroll = true;

        /**
         * The Markdown string you want to show at the top of the left sidebar.
         * @type {string}
         */
        this.navHeader = '';

        /**
         * The Markdown string you want to show at the top of the right sidebar.
         * This string is processed by the template engine before being displayed.
         * @type {string}
         */
        this.asideHeader = '';

        /**
         * The initial value of {@link model.globalState}. Must be JSON-safe.
         * @type {*}
         */
        this.globalState = {};

        /**
         * List of {@link character} definitions.
         * **Note:** this is not the same as the {@link Character} class!
         * There's a difference between what you write in your game definition, and what gets passed to the
         * various callbacks.
         * @type {character}
         */
        this.characters = [];

        /**
         * List of {@link situation} definitions.
         * **Note:** this is not the same as the {@link Situation} class!
         * There's a difference between what you write in your game definition, and what gets passed to the
         * various callbacks.
         * @type {situation}
         */
        this.situations = [];
    }

    /**
     * Called immediately after all initial objects have been created, but before the
     * first situation has been entered. This is where you would add Markdown plugins
     * and Nunjucks filters.
     * @param {model} model 
     * @param {ui} ui 
     */
    init(model, ui) { }

    /**
     * Called when the game has requested to enter a new situation. This function returns
     * a truthy value (`true`) if this should be allowed, `false` if not.
     * 
     * It is safe to call `model.do()` or `model.goTo()` from `willEnter()`, as long as
     * you return `false` afterward.
     * 
     * @param {model} model
     * @param {ui} ui 
     * @param {string} previousId 
     * @param {string} nextId 
     * @returns {Boolean}
     */
    willEnter(model, ui, previousId, nextId) { }
    
    /**
     * Called when the game has just entered a new situation.
     * @param {model} model 
     * @param {ui} ui
     * @param {string} previousId 
     * @param {string} nextId 
     */
    didEnter(model, ui, previousId, nextId) { }

    /**
     * Called when the game is about to exit a situation.
     * @param {model} model 
     * @param {ui} ui 
     * @param {string} thisId 
     * @param {string} nextId 
     */
    willExit(model, ui, thisId, nextId) { }

    /**
     * Called when the game just exited a situation.
     * @param {model} model 
     * @param {ui} ui 
     * @param {string} thisId 
     * @param {string} nextId 
     */
    didExit(model, ui, thisId, nextId) { }

    /**
     * Called when the game is about to execute the given action on the given sitaution.
     * @param {model} model 
     * @param {ui} ui 
     * @param {Situation} situation 
     * @param {string} action 
     */
    willAct(model, ui, situation, action) { }

    /**
     * Called when the game is just executed the given action on the given sitaution.
     * @param {model} model 
     * @param {ui} ui 
     * @param {Situation} situation 
     * @param {string} action 
     */
    didAct(model, ui, situation, action) { }
};
export default game;