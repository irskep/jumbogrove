# Jumbo Grove

An interactive fiction engine. Uses Vue.js, but you don't need to know that!

## Setup

```sh
npm install -g yarn  # yarn is the best, please install it!
yarn install
```

## Developing

You can run a local auto-reloading server like this:
```sh
yarn run dev
```

You can run the tests like this:
```sh
yarn run test
yarn run watchtest  # re-run tests when files change
```

## Deploying to a web site

```sh
yarn run build
```

## How it works

Eventually, this will be available as a library. You'll do something like this:

```html
<html>
    <head>
        <script src="jumbogrove.js"></script>
    </head>
    <body>
        <div id="app">
        <script>
            window.runJumboGrove('#app', {
                id: 'my-game',
                navHeader: `
                    # My Game

                    This text appears in the left sidebar.
                `,
                asideHeader: `
                    # Stats

                    This text appears in the right sidebar.
                `,
                globalState: {
                    foo: 'bar',  // you may put anything JSON-safe in here
                },
                characters: [
                    // this section is a work in progress
                ],
                situations: [
                    /*
                    This is where the meat of the library is.

                    A "situation" can be thought of as a room, a section, or
                    some other conceptual unit. It has:

                    * Markdown text displayed when you enter
                    * "snippets" which can be inserted based on the user
                        clicking links
                    * "choices" which are automatically displayed after the text
                    * JavaScript callbacks for all kinds of things
                    * So much more, but I haven't had time to write docs yet

                    */
                    {
                        id: 'start',  // first situation
                        content: `
                            # Welcome to Jumbo Grove

                            [Normal links](https://google.com) work normally.

                            [Links with an @](@frog) transition to another situation.

                            [Links with a >](>debug_log) run an "action" within the
                            situation. You can provide arguments to the action function
                            using [colon separators](>debug_log:whats:up).
                        `,
                        actions: {
                            debug_log: (...args) => { console.log("HELLO!", ...args); },
                        },
                        choices: ['snippets_demo', 'state_demo'],
                        // if this situation shows up in another choices array,
                        // use this text:
                        optionText: 'Go back to start',
                    },

                    {
                        id: 'frog',
                        optionText: 'Look at the cool frog',
                        content: `
                            There is a cool frog sitting on a stump.
                        `,
                        choices: ['start'],
                    },

                    {
                        id: 'snippets_demo',
                        optionText: 'Snippets demo',
                        choices: ['start', 'state_demo'],
                        content: `
                            There are a few built-in special actions.

                            1. \`write\` appends the snippet contents to the end of the
                                current section. [Try it](>write:poem)
                            2. \`replace\` replaces the HTML element with the same ID as the
                                snippet, with the contents of the snippet. [Try it](>replace:ghost)

                                _This text will be replaced_{#ghost}
                            3. \`replaceself\` replaces the clicked link with the contents of
                                the snippet. [Try it](>replaceself:robot)
                        `,
                        snippets: {
                            poem: `
                                ### A poem

                                > Higgledy-piggledy Emily Dickinson  
                                > Liked to use dashes instead of full stops.  
                                > Nowadays, faced with such idiosyncrasies,  
                                > Critics and editors run for the cops.  
                            `,
                            ghost: '**BOO!**',
                            robot: "Beep boop I'm a robot",
                        },
                    },

                    {
                        id: 'state_demo',
                        optionText: 'State demo',
                        choices: ['start', 'snippets_demo'],
                        content: `
                        This section is not yet finished.
                        `
                    },
                ],
            });
        </script>
    </body>
</html>
```

# ui reference