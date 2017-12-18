_.defer(() => {
  const base = {
    id: 'demo',
    showNav: false,
    showAside: false,
    autoScroll: false,
    autoMoveFocus: false,
    defaultStylesheet: false,
  };
  function tryGame(selector, game) {
    if (document.querySelector(selector)) {
      jumbogrove.jumbogrove(selector, Object.assign({}, base, game));
    }
  }

  tryGame('#firstdemo', {
    globalState: {numDocs: 0},
    situations: [
      {
        id: 'start',
        content: `
        ### The Jumbo Grove Experience

        You are [sitting in the back](>replaceself:patrons_back) of a
        [coffee shop](>write:describe_coffee_shop).

        You stare blankly at the address bar of your web browser.
        `,
        snippets: {
          patrons_back: `sitting, laptop open, hunched forward, in the back`,
          describe_coffee_shop: `
          You come here a lot. It's your only interaction with humans
          in real life, other than grocery store cashiers. You've been
          working on your interactive fiction game design for months
          now.
          `
        },
        choices: ['drink-coffee', 'read-reddit', 'view-documentation']
      },
      {
        id: 'drink-coffee',
        optionText: 'Drink your coffee',
        content: `
        You sip your coffee. You stare at your laptop screen.
        `,
        choices: ['read-reddit', 'view-documentation']
      },
      {
        id: 'read-reddit',
        optionText: 'Read Reddit',
        content: `
        You browse /new page of \`/r/interactivefiction\` for the fifth time
        in the last hour. It brings you no joy.
        `,
        choices: ['view-documentation'],
      },
      {
        id: 'view-documentation',
        optionText: 'Read the JumboGrove documentation',
        content: `
        Finally, you decide to do some actual work. You crack open the
        documentation for Jumbo Grove, an amazing new interactive fiction
        game engine that all your cool friends are raving about.
        `,
        choices: ['#docs']
      },

      {
        tags: ['docs'], id: 'docs-basics', optionText: 'Read the intro tutorial',
        getCanSee: (model) => !model.globalState.docsBasics,
        enter: (model) => {
          model.globalState.docsBasics = true;
          model.globalState.numDocs += 1;
        },
        choices: ['#docs'],
        content: `
        You follow the introductory tutorial and learn about the basics
        of Jumbo Grove.
        `,
      },

      {
        tags: ['docs'], id: 'docs-choices', optionText: 'Read about choices',
        getCanSee: (model) => !model.globalState.docsChoices,
        enter: (model) => {
          model.globalState.docsChoices = true;
          model.globalState.numDocs += 1;
        },
        choices: ['#docs'],
        content: `
        You read the guide to choices and scripting, learning how you can give
        the player complex decisions to make.
        `,
      },

      {
        tags: ['docs'], id: 'docs-templates', optionText: 'Read about templates',
        getCanSee: (model) => !model.globalState.docsTemplates,
        enter: (model) => {
          model.globalState.docsTemplates = true;
          model.globalState.numDocs += 1;
        },
        choices: ['#docs'],
        content: `
        You read about how to show different text depending on the game state,
        and how to write your own tools to save typing.
        `,
      },

      {
        tags: ['docs'], id: 'docs-actions', optionText: 'Read about actions',
        getCanSee: (model) => !model.globalState.docsActions,
        enter: (model) => {
          model.globalState.docsActions = true;
          model.globalState.numDocs += 1;
        },
        choices: ['#docs'],
        content: `
        You read about actions, and how they can add interactivity to a scene
        in interesting ways.
        `,
      },

      {
        tags: ['docs'], id: 'docs-end', optionText: 'Write your game',
        getCanSee: (model) => model.globalState.numDocs >= 3,
        content: `
        You feel like you know enough about Jumbo Grove to get started.
        You start typing and don't stop for hours. By the time the barista finally
        kicks you out, you've written a masterpiece.

        # The End
        `
      }
    ]
  });

  tryGame('#maze-1', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      {id: 'A', content: "You are standing in cell A.", optionText: "Enter the maze"}
    ]
  });

  tryGame('#maze-2', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      { id: 'A', optionText: "Enter the maze",
        content: "You are standing in cell A.",
        choices: ['E'] },
      { id: 'B', optionText: "Go to B", content: "You are standing in cell B.",
        choices: ['F', 'C']},
      { id: 'C', optionText: "Go to C", content: "You are standing in cell C.",
        choices: ['B', 'G']},
      { id: 'D', optionText: "Go to D", content: "You are standing in cell D.",
        choices: ['H']},
      { id: 'E', optionText: "Go to E", content: "You are standing in cell E.",
        choices: ['A', 'I', 'F']},
      { id: 'F', optionText: "Go to F", content: "You are standing in cell F.",
        choices: ['E', 'B']},
      { id: 'G', optionText: "Go to G", content: "You are standing in cell G.",
        choices: ['C', 'K', 'H']},
      { id: 'H', optionText: "Go to H", content: "You are standing in cell H.",
        choices: ['G', 'D']},
      { id: 'I', optionText: "Go to I", content: "You are standing in cell I.",
        choices: ['E', 'J']},
      { id: 'J', optionText: "Go to J", content: "You are standing in cell J.",
        choices: ['I', 'N']},
      { id: 'K', optionText: "Go to K", content: "You are standing in cell K.",
        choices: ['G', 'O', 'L']},
      { id: 'L', optionText: "Go to L", content: "You are standing in cell L.",
        choices: ['K', 'P']},
      { id: 'M', optionText: "Go to M", content: "You are standing in cell M.",
        choices: ['N']},
      { id: 'N', optionText: "Go to N", content: "You are standing in cell N.",
        choices: ['M', 'J']},
      { id: 'O', optionText: "Go to O", content: "You are standing in cell O.",
        choices: ['K']},
      { id: 'P', optionText: "Go to P", content: "You are standing in cell P.",
        choices: ['L', 'win']},
      {
        id: 'win',
        optionText: 'Exit the maze',
        content: `
          You exit the maze victorious!
        `
      }
    ]
  });

  tryGame('#house-game', {
    id: 'house-game',
    initialSituation: 'living-room',  // use this instead of 'start' if you want
    situations: [
      {
        id: 'living-room',
        optionText: 'Go to the living room',
        content: "The living room has a couch and a TV.",
        choices: ['#from-living-room']
      },
      {
        id: 'bathroom',
        tags: ['from-living-room'],
        optionText: "Enter the bathroom",
        displayOrder: 2,  // show up AFTER the bedroom in the choices list
        content: "The bathroom contains a sink and a toilet.",
        choices: ['living-room']
      },
      {
        id: 'bedroom',
        tags: ['from-living-room'],
        displayOrder: 1,  // show up BEFORE the bathroom in the choices list
        optionText: "Enter the bedroom",
        content: "The bedroom is filled by a queen sized bed and a dresser.",
        choices: ['living-room']
      },
    ]
  });

  tryGame('#maze-3', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      { id: 'A', optionText: "Enter the maze",
        content: "You are standing in cell A.",
        choices: ['E'] },
      { id: 'B', optionText: "Go to B", content: "You are standing in cell B.",
        choices: ['F', 'C']},
      { id: 'C', optionText: "Go to C", content: "You are standing in cell C.",
        choices: ['B', 'G']},
      {
        id: 'D',
        tags: ['teleporter'],
        optionText: "Go to D",
        content: "You are standing in cell D. There is a teleporter here.",
        choices: ['H', '#teleporter']
      },
      { id: 'E', optionText: "Go to E", content: "You are standing in cell E.",
        choices: ['A', 'I', 'F']},
      { id: 'F', optionText: "Go to F", content: "You are standing in cell F.",
        choices: ['E', 'B']},
      { id: 'G', optionText: "Go to G", content: "You are standing in cell G.",
        choices: ['C', 'K', 'H']},
      { id: 'H', optionText: "Go to H", content: "You are standing in cell H.",
        choices: ['G', 'D']},
      { id: 'I', optionText: "Go to I", content: "You are standing in cell I.",
        choices: ['E', 'J']},
      { id: 'J', optionText: "Go to J", content: "You are standing in cell J.",
        choices: ['I', 'N']},
      { id: 'K', optionText: "Go to K", content: "You are standing in cell K.",
        choices: ['G', 'O', 'L']},
      {
        id: 'L',
        tags: ['teleporter'],
        optionText: "Go to L",
        content: "You are standing in cell L. There is a teleporter here.",
        choices: ['K', 'P', '#teleporter']
      },
      {
        id: 'M',
        tags: ['teleporter'],
        optionText: "Go to M",
        content: "You are standing in cell M. There is a teleporter here.",
        choices: ['N', '#teleporter']
      },
      { id: 'N', optionText: "Go to N", content: "You are standing in cell N.",
        choices: ['M', 'J']},
      { id: 'O', optionText: "Go to O", content: "You are standing in cell O.",
        choices: ['K']},
      { id: 'P', optionText: "Go to P", content: "You are standing in cell P.",
        choices: ['L', 'win']},
      {
        id: 'win',
        optionText: 'Exit the maze',
        content: `
          You exit the maze victorious!
        `
      }
    ]
  });

  tryGame('#maze-4', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      { id: 'A', 
        optionText: function(model, hostSituation) {
          if (hostSituation.id === 'start') {
            return 'Enter the maze';
          } else {
            return 'Go to A';
          }
        },
        content: "You are standing in cell A.",
        choices: ['E'] },
      { id: 'B', optionText: "Go to B", content: "You are standing in cell B.",
        choices: ['F', 'C']},
      { id: 'C', optionText: "Go to C", content: "You are standing in cell C.",
        choices: ['B', 'G']},
      {
        id: 'D',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to D';
          } else {
            return 'Go to D';
          }
        },
        content: "You are standing in cell D. There is a teleporter here.",
        choices: ['H', '#teleporter']
      },
      { id: 'E', optionText: "Go to E", content: "You are standing in cell E.",
        choices: ['A', 'I', 'F']},
      { id: 'F', optionText: "Go to F", content: "You are standing in cell F.",
        choices: ['E', 'B']},
      { id: 'G', optionText: "Go to G", content: "You are standing in cell G.",
        choices: ['C', 'K', 'H']},
      { id: 'H', optionText: "Go to H", content: "You are standing in cell H.",
        choices: ['G', 'D']},
      { id: 'I', optionText: "Go to I", content: "You are standing in cell I.",
        choices: ['E', 'J']},
      { id: 'J', optionText: "Go to J", content: "You are standing in cell J.",
        choices: ['I', 'N']},
      { id: 'K', optionText: "Go to K", content: "You are standing in cell K.",
        choices: ['G', 'O', 'L']},
      {
        id: 'L',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to L';
          } else {
            return 'Go to L';
          }
        },
        content: "You are standing in cell L. There is a teleporter here.",
        choices: ['K', 'P', '#teleporter']
      },
      {
        id: 'M',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to M';
          } else {
            return 'Go to M';
          }
        },
        content: "You are standing in cell M. There is a teleporter here.",
        choices: ['N', '#teleporter']
      },
      { id: 'N', optionText: "Go to N", content: "You are standing in cell N.",
        choices: ['M', 'J']},
      { id: 'O', optionText: "Go to O", content: "You are standing in cell O.",
        choices: ['K']},
      { id: 'P', optionText: "Go to P", content: "You are standing in cell P.",
        choices: ['L', 'win']},
      {
        id: 'win',
        optionText: 'Exit the maze',
        content: `
          You exit the maze victorious!
        `
      }
    ]
  });

  tryGame("#prison-escape", {
    id: 'prison-escape',
    // You can specify the initial value of globalState like this
    globalState: {
      playerHasKey: false,
    },
    situations: [
      {
        id: 'start',
        optionText: 'Return to your bedroom',
        content: `
          You are standing in a cold, damp cell. A straw mattress lies in
          the corner.
        `,
        choices: ['key-room', 'door-room'],
      },

      {
        id: 'key-room',
        // In the ASCII map I drew this as a whole room, but the flavor
        // text just calls it a hole in the wall.
        optionText: 'Inspect hole in the wall',
        getCanSee: function(model, host) {
          // only visible if player doesn't already have the key
          return model.globalState.playerHasKey === false;
        },
        enter: function(model, ui, from) {
          model.globalState.playerHasKey = true;
        },
        content: `
          There is a key hidden in the hole!
        `,
        choices: ['start']
      },

      {
        id: 'door-room',
        optionText: 'Walk to the other end of the room',
        content: `
          There is a locked door here.
        `,
        choices: ['start', 'win-the-game']
      },

      {
        id: 'win-the-game',
        optionText: 'Unlock the door',
        getCanChoose: function(model, host) {
          // only pickable if player DOES have the key
          return model.globalState.playerHasKey === true;
        },
        content: `
          You walk out into the hallway. You're free!

          # Game Over
        `
      }

    ]
  });

  tryGame("#party-crush", {
    id: 'party-crush',
    globalState: {
      turnsUntilCrushEnters: 2,
      hasTalkedToJeff: false,
      hasTalkedToXiao: false,
      hasTalkedToMegan: false,
      hasTalkedToMarta: false
    },
    situations: [
      {
        id: 'start',
        content: "You have entered a pretty chill party.",
        choices: ['#talk-to-someone'],
      },

      {
        id: 'jeff', tags: ['talk-to-someone'],
        optionText: "Talk to Jeff",
        getCanSee: function(model) { return !model.globalState.hasTalkedToJeff; },
        enter: function(model) {
          model.globalState.hasTalkedToJeff = true;
          model.globalState.turnsUntilCrushEnters -= 1;
        },
        content: "You catch up with Jeff. He aced his math test.",
        choices: ['#talk-to-someone']
      },

      {
        id: 'xiao', tags: ['talk-to-someone'],
        optionText: "Talk to Xiao",
        getCanSee: function(model) { return !model.globalState.hasTalkedToXiao; },
        enter: function(model) {
          model.globalState.hasTalkedToXiao = true;
          model.globalState.turnsUntilCrushEnters -= 1;
        },
        content: "You catch up with Xiao. He scored the winning goal at a football game.",
        choices: ['#talk-to-someone']
      },

      {
        id: 'megan', tags: ['talk-to-someone'],
        optionText: "Talk to Megan",
        getCanSee: function(model) { return !model.globalState.hasTalkedToMegan; },
        enter: function(model) {
          model.globalState.hasTalkedToMegan = true;
          model.globalState.turnsUntilCrushEnters -= 1;
        },
        content: "You catch up with Megan. She tells you about a short story she wrote.",
        choices: ['#talk-to-someone']
      },

      {
        id: 'marta', tags: ['talk-to-someone'],
        optionText: "Talk to Marta",
        getCanSee: function(model) { return !model.globalState.hasTalkedToMarta; },
        enter: function(model) {
          model.globalState.hasTalkedToMarta = true;
          model.globalState.turnsUntilCrushEnters -= 1;
        },
        content: "You catch up with Marta. She just beat her personal best deadlift.",
        choices: ['#talk-to-someone']
      },

      {
        id: 'crush', tags: ['talk-to-someone'],
        optionText: "Your crush is here",
        priority: 1,
        getCanSee: function(model) {
          return model.globalState.turnsUntilCrushEnters <= 0;
        },
        content: `
        You see your crush enter the party. You immediately forget how to speak.
        You stammer uncontrollably, trying to excuse yourself while you escape
        out the back door.

        # The End
        `
      }

    ]
  });

  tryGame('#simple-puzzle', {
    id: 'simple-puzzle',
    globalState: { hasPulledLever: false },
    situations: [

      { id: 'start',
        optionText: 'OK',
        content: `
        You are standing in a room with a thick shag carpet and purple velvet walls.

        {% if hasPulledLever %}
        The north wall has opened up into a huge cavern.
        {% else %}
        There is a lever on the west wall.
        {% endif %}
        `,
        choices: ['pull-lever']
      },

      { id: 'pull-lever',
        optionText: 'Pull the lever',
        getCanSee: function(model) { return !model.globalState.hasPulledLever; },
        enter: function(model) {
          model.globalState.hasPulledLever = true;
        },
        content: `
          You pull the lever. A rumbling sound starts beneath your feet.
        `,
        choices: ['start']
      },

    ]
  });

  tryGame('#custom-filter-demo', {
    id: 'custom-filter-demo',
    globalState: { isAwesome: true },
    init: function(model, ui) {
      ui.nunjucks.addFilter('yesNo', function(val) {
        if (val) { return "yes"; } else { return "no"; }
      });
    },
    situations: [
      {
        id: 'start',
        // Am I awesome? YES!
        content: "Am I awesome? {{ isAwesome|yesNo|upper }}!"
      }
    ]
  });

  tryGame('#whitespace-example-1', {
    id: 'whitespace-example-1',
    situations: [
      {
        id: 'start',
        content: `
        Hello.

        {% if true %}
            This will show up as code!
        {% endif %}

        {% if true %}
        This is a normal paragraph.
        {% endif %}

        {% if true %}
          This only uses 2 spaces and is also a normal paragraph.
        {% endif %}
        `
      }
    ]
  });

  tryGame('#whitespace-example-2', {
    id: 'whitespace-example-2',
    situations: [
      {
        id: 'start',
        content: `
        Hey, my name is
        {% if name == 'brad' -%}
          Brad
        {%- else -%}
          Jeff
        {%- endif %}.
        `
      }
    ]
  });

  tryGame('#markdown-it-attrs-demo', {
    id: 'markdown-it-attrs-demo',
    situations: [
      {
        id: 'start',
        content: `
        The last word is **pink**{.demo-pink}! Use your browser's
        inspector tool to look at the CSS on it.
        `
      }
    ]
  });

  tryGame('#workout', {
    id: 'workout',
    init: function(model, ui) {
      ui.nunjucks.addFilter('formatSwoleness', function(str) {
        const n = parseInt(str, 10);
        if (!n) return 'Do you even lift';
        switch (n) {
          case 1: return 'Average';
          case 2: return 'Swole';
          case 3: return 'Mad swole';
          default: return 'Jacked';
        }
      });
    },
    globalState: {
      swoleness: 0,
    },
    situations: [
      {
        id: 'start',
        content: `
        You are in Sgt. McBeefy's Gym for People Who Want To Get Strong, because you
        want to get strong.

        There are some [dumbbells](>workout:dumbbells).

        There is a [leg press machine](>workout:leg_press).

        There is a [pull-up bar](>workout:pull_ups).

        There is a [squat rack](>workout:squat_rack).
        `,
        actions: {
          // after 'model' and 'ui', function arguments come from
          // the link in the original Markdown.
          workout: function(model, ui, whichMachine) {
            console.log("go");
            model.globalState.swoleness += 1;

            switch (whichMachine) {
              // You can write stuff to the end of the transcript manually with
              // `ui.write()`. These strings include an extra `\n`
              // character because otherwise Jumbo Grove won't add a surrounding
              // <p> tag.
              case 'dumbbells':
                ui.write("You lift some dumbbells.\n"); break;
              case 'leg_press':
                ui.write("You use the leg press.\n"); break;
              case 'pull_ups':
                ui.write("You use the pull-up bar.\n"); break;
              case 'squat_rack':
                ui.write("You do some squats.\n"); break;
            }

            ui.write(`
            Your strength level is: **{{ swoleness|formatSwoleness }}**
            `);

            if (model.globalState.swoleness >= 4) {
              ui.write(`
              [Hit the showers](@end)
              `);
            }
          }
        }
      },
      {
        id: 'end',
        content: "Congrats on getting jacked!"
      }
    ]
    
  });

  tryGame('#woods', {
    id: 'woods',
    situations: [
      {
        id: 'start',
        content: `
        You are [standing](>replaceself:be_quiet) under a [tree](>write:hear_the_wind).

        A *blue*{#make_the_bird_red} [bird](>replace:make_the_bird_red) sits on a
        branch above you.
        `,
        snippets: {
          // Snippets may contain more actions!
          be_quiet: `standing [quietly](>replaceself:be_noisy)`,
          be_noisy: `noisily`,
          hear_the_wind: `
            The wind rustles the leaves above your head.
          `,
          make_the_bird_red: `*red*`,
        }
      }
    ]
  });

  tryGame('#multi-action', {
    id: 'multi-action',
    situations: [
      {
        id: 'start',
        content: `
        There is a [red](>replaceself:blue;>write:fly_away) bird here.
        `,
        snippets: {
          blue: 'blue',
          fly_away: `
          It flies away.
          `
        }
      }
    ]
  });

  tryGame('#workout-2', {
    id: 'workout-2',
    init: function(model, ui) {
      ui.nunjucks.addFilter('formatSwoleness', function(str) {
        const n = parseInt(str, 10);
        if (!n) return 'Do you even lift';
        switch (n) {
          case 1: return 'Average';
          case 2: return 'Swole';
          case 3: return 'Mad swole';
          default: return 'Jacked';
        }
      });
    },
    globalState: {
      swoleness: 0,
    },
    situations: [
      {
        id: 'start',
        content: `
        You are in Sgt. McBeefy's Gym for People Who Want To Get Strong, because you
        want to get strong.

        There are some [dumbbells](>write:dumbbells;>show_progress).

        There is a [leg press machine](>write:leg_press;>show_progress).

        There is a [pull-up bar](>write:pull_ups;>show_progress).

        There is a [squat rack](>write:squat_rack;>show_progress).
        `,
        snippets: {
          dumbbells: "You lift some dumbbells.\n",
          leg_press: "You use the leg press.\n",
          pull_ups: "You use the pull-up bar.\n",
          squat_rack: "You do some squats.\n"
        },
        actions: {
          show_progress: function(model, ui) {
            model.globalState.swoleness += 1;

            // no more gross switch statement!

            ui.write(`
            Your strength level is: **{{ swoleness|formatSwoleness }}**
            `);

            if (model.globalState.swoleness >= 4) {
              ui.write(`
              [Hit the showers](@end)
              `);
            }
          }
        }
      },
      {
        id: 'end',
        content: "Congrats on getting jacked!"
      }
    ]
    
  });

  tryGame('#character-example', {
    id: 'character-example',
    showAside: true,
    asideHeader: "Qualities:",
    showNav: true,
    navHeader: "Qualities: the game!",
    characters: [
      {
        // 'player' is a special character accessible at model.player
        id: 'player',  
        name: 'You',
        // this is like globalState but just for this character.
        state: {},  

        qualities: {
          // Qualities are always grouped.
          main: {
            name: 'Main',  // optional group heading
            priority: 0,   // higher priority = higher in list
            hidden: false, // default true; if false, not shown in sidebar
            hunger: {
              name: "Hunger",
              type: 'wordScale',
              words: [
                'stuffed', 'full', 'satisfied', 'not hungry',
                'a little hungry', 'very hungry', 'super hungry', 'famished',
                'ravenous', 'starving'
              ],
              offset: -1,  // wordScale is 0-indexed, but value is 1-indexed, so
                           // subtract 1 when looking up words
              initialValue: 4,  // "not hungry"
            }
          }
        }
      }
    ],

    situations: [
      {
        id: 'start',
        enter: function(model, ui) {
          model.character('player').addToQuality('hunger', 1);
          ui.write(`
          After adding 1 to player hunger, player is now:
          `);
          ui.write(model.player.formatQuality('hunger'));
        },
        content: `
          Quality name: {{ model.character('player')|qualityName('hunger') }}

          Quality value: {{ model.character('player')|quality('hunger') }}
        `,
        choices: ['eat'],
      },
      {
        id: 'eat',
        enter: function(model, ui) {
          model.character('player').addToQuality('hunger', -1);
        },
        content: `
        Look at the sidebar; the value changed
        `
      }
    ]
  });

  tryGame('#maze-clear-example', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      { id: 'A', optionText: "Enter the maze",
        clear: true,
        content: "You are standing in cell A.",
        choices: ['E'] },
      { id: 'B', optionText: "Go to B", content: "You are standing in cell B.",
        clear: true,
        choices: ['F', 'C']},
      { id: 'C', optionText: "Go to C", content: "You are standing in cell C.",
        clear: true,
        choices: ['B', 'G']},
      {
        id: 'D',
        tags: ['teleporter'],
        optionText: "Go to D",
        clear: true,
        content: "You are standing in cell D. There is a teleporter here.",
        choices: ['H', '#teleporter']
      },
      { id: 'E', optionText: "Go to E", content: "You are standing in cell E.",
        clear: true,
        choices: ['A', 'I', 'F']},
      { id: 'F', optionText: "Go to F", content: "You are standing in cell F.",
        clear: true,
        choices: ['E', 'B']},
      { id: 'G', optionText: "Go to G", content: "You are standing in cell G.",
        clear: true,
        choices: ['C', 'K', 'H']},
      { id: 'H', optionText: "Go to H", content: "You are standing in cell H.",
        clear: true,
        choices: ['G', 'D']},
      { id: 'I', optionText: "Go to I", content: "You are standing in cell I.",
        clear: true,
        choices: ['E', 'J']},
      { id: 'J', optionText: "Go to J", content: "You are standing in cell J.",
        clear: true,
        choices: ['I', 'N']},
      { id: 'K', optionText: "Go to K", content: "You are standing in cell K.",
        clear: true,
        choices: ['G', 'O', 'L']},
      {
        id: 'L',
        tags: ['teleporter'],
        optionText: "Go to L",
        clear: true,
        content: "You are standing in cell L. There is a teleporter here.",
        choices: ['K', 'P', '#teleporter']
      },
      {
        id: 'M',
        tags: ['teleporter'],
        optionText: "Go to M",
        clear: true,
        content: "You are standing in cell M. There is a teleporter here.",
        choices: ['N', '#teleporter']
      },
      { id: 'N', optionText: "Go to N", content: "You are standing in cell N.",
        clear: true,
        choices: ['M', 'J']},
      { id: 'O', optionText: "Go to O", content: "You are standing in cell O.",
        clear: true,
        choices: ['K']},
      { id: 'P', optionText: "Go to P", content: "You are standing in cell P.",
        clear: true,
        choices: ['L', 'win']},
      {
        id: 'win',
        optionText: 'Exit the maze',
        clear: true,
        content: `
          You exit the maze victorious!
        `
      }
    ]
  });

  tryGame('#maze-4', {
    id: 'maze-game',
    situations: [
      {
        id: 'start',  // the situation with id=start is how the game begins
        content: `
          You are standing at the entrance of a maze.
        `,
        choices: ['A']
      },
      { id: 'A', 
        optionText: function(model, hostSituation) {
          if (hostSituation.id === 'start') {
            return 'Enter the maze';
          } else {
            return 'Go to A';
          }
        },
        content: "You are standing in cell A.",
        choices: ['E'] },
      { id: 'B', optionText: "Go to B", content: "You are standing in cell B.",
        choices: ['F', 'C']},
      { id: 'C', optionText: "Go to C", content: "You are standing in cell C.",
        choices: ['B', 'G']},
      {
        id: 'D',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to D';
          } else {
            return 'Go to D';
          }
        },
        content: "You are standing in cell D. There is a teleporter here.",
        choices: ['H', '#teleporter']
      },
      { id: 'E', optionText: "Go to E", content: "You are standing in cell E.",
        choices: ['A', 'I', 'F']},
      { id: 'F', optionText: "Go to F", content: "You are standing in cell F.",
        choices: ['E', 'B']},
      { id: 'G', optionText: "Go to G", content: "You are standing in cell G.",
        choices: ['C', 'K', 'H']},
      { id: 'H', optionText: "Go to H", content: "You are standing in cell H.",
        choices: ['G', 'D']},
      { id: 'I', optionText: "Go to I", content: "You are standing in cell I.",
        choices: ['E', 'J']},
      { id: 'J', optionText: "Go to J", content: "You are standing in cell J.",
        choices: ['I', 'N']},
      { id: 'K', optionText: "Go to K", content: "You are standing in cell K.",
        choices: ['G', 'O', 'L']},
      {
        id: 'L',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to L';
          } else {
            return 'Go to L';
          }
        },
        content: "You are standing in cell L. There is a teleporter here.",
        choices: ['K', 'P', '#teleporter']
      },
      {
        id: 'M',
        tags: ['teleporter'],
        optionText: function(model, host) {
          if (host.hasTag('teleporter')) {
            return 'Teleport to M';
          } else {
            return 'Go to M';
          }
        },
        content: "You are standing in cell M. There is a teleporter here.",
        choices: ['N', '#teleporter']
      },
      { id: 'N', optionText: "Go to N", content: "You are standing in cell N.",
        choices: ['M', 'J']},
      { id: 'O', optionText: "Go to O", content: "You are standing in cell O.",
        choices: ['K']},
      { id: 'P', optionText: "Go to P", content: "You are standing in cell P.",
        choices: ['L', 'win']},
      {
        id: 'win',
        optionText: 'Exit the maze',
        content: `
          You exit the maze victorious!
        `
      }
    ]
  });

  tryGame('#save-example', {
    id: 'save-example',
    showNav: true,
    gameSaveMessage: '> Game saved.',
    navHeader: `
    ### A Game You Can Save

    [Start over](>resetGame)
    `,
    situations: [
      {
        id: 'start',
        autosave: true,
        content: `
        You are at START.
        `,
        choices: ['the-other-scene']
      },
      {
        id: 'the-other-scene',
        autosave: true,
        content: `
        You are at THE OTHER SCENE.
        `,
        choices: ['start']
      }
    ]
  });

});