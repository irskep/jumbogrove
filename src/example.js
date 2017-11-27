// https://github.com/idmillington/undum/blob/master/docs/src/API.md
// http://raconteur.readthedocs.io/en/latest/oneOf/
// https://github.com/sequitur/improv
// https://www.npmjs.com/package/markdown-it-attrs
// https://www.npmjs.com/package/markdown-it-block-embed
// https://www.npmjs.com/package/markdown-it-html5-embed
// https://www.npmjs.com/package/markdown-it-html5-media
// https://github.com/adam-p/markdown-it-smartarrows
// https://www.npmjs.com/package/markdown-it-classy
// https://www.npmjs.com/package/markdown-it-external-links
// https://www.npmjs.com/package/markdown-it-strikethrough-alt
// https://www.npmjs.com/package/markdown-it-replacements
import _ from 'lodash';

export default {
    id: 'jg-example',
    version: 1,
    // initialSituation: 'demo', 
    navHeader: `
    # Example game

    An example game for Jumbo Grove by Steve Johnson
    `,
    asideHeader: `
    # Characters
    `,
    globalState: {
        aliensHaveInvaded: false,
    },
    willEnter: (model, ui, oldSituationId, newSituationId) => {
        if (oldSituationId) {
            ui.logHTML('<hr>');
        }
        return true;
    },
    init(model, ui, md) {
        // configure markdown here!
    },
    characters: [
        {
            id: 'player',
            name: 'Bob',
            description: 'It is you',
            showInSidebar: true,
            priority: 0,
            qualities: {
                util: {
                    hidden: true,
                },
                attributes: {
                    name: 'Attributes',
                    priority: 0,
                    hair: {
                        type: 'onOff',
                        name: "widow's peak",
                        words: ["no", "yes"],
                        priority: 0,
                        initialValue: false,
                    },
                    stealthy: {
                        type: 'flag',
                        name: "Stealthy",
                        priority: 1,
                        initialValue: false,
                    }
                },
                states: {
                    name: 'States',
                    priority: 1,
                    hunger: {
                        type: 'wordScale',
                        name: 'Hunger',
                        words: ['ravenous', 'hungry', 'neutral', 'sated', 'stuffed'],
                        priority: 0,
                        offset: 2,
                        initialValue: 0,
                    },
                },
            },
            state: {
                inventory: [],
            },
        },
    ],
    situations: [
        {
            id: 'start',
            optionText: 'Play the Bob Game',
            content: `
            ## The Bob Game

            [Read more about Bob](>write_aboutBob)

            [Change favorite color](>replace_favoriteColor)

            [What am I?](>replaceself_teapot)

            Favorite color: **red**{#favoriteColor}
            `,
            choices: ['longboye', 'demo', 'hello'],
            writers: {
                aboutBob: `
                    Bob is a nice guy. You should get to know him.
                `
            },
            replacers: {
                favoriteColor: "[blue](>replaceself_teapot)",
                teapot: "I'm a teapot!",
            },
        },
        {
            id: 'demo',
            optionText: 'Go back to start',
            content: `
                <% if (model.currentSituation.totalVisits > 0) { %>
                You have visited <%- model.currentSituation.totalVisits %> times.
                <% } else { %>
                What is your [name](>bob)?
                <% } %>
            `,
            enter: (model, ui, fromSituation) => {
                ui.promptInput({placeholder: 'Enter your name'})
                    .then((name) => { 
                        model.player.name = name;
                        model.goTo('hello')
                    });
            },
            actions: {
                bob: (model, ui) => {
                    model.player.name = 'Bob';
                    model.goTo('hello');
                }
            }
        },
        {
            id: 'hello',
            content: `
                **You made your first choice**

                Howdy, <%- model.player.name %>!
            `,
            choices: ['start', 'longboye'],
        },
        {
            id: 'longboye',
            content: _.range(0, 200).map(() => '|').join('\n\n'),
            choices: ['start', 'demo', 'hello']
        },
    ]
};
