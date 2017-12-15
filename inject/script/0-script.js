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
    situations: [
      {
        id: 'start',
        content: `
        ### The Jumbo Grove Experience
        You are looking at a [web page](>write:web_page).
        `,
        snippets: {
          web_page: `
          It is the documentation for Jumbo Grove. What do you want to do?

          * [Make a game](@make-a-game)
          * [Admire the beautiful CSS](@admire-css)
          `
        }
      },
      {
        id: 'make-a-game',
        content: `
        You type until your fingers are [sore](>replaceself:sore_fingers).
        You make something incredible.
        `,
        snippets: {
          sore_fingers: "sore (like, really sore)"
        },
        choices: ['admire-css'],
      },
      {
        id: 'admire-css',
        optionText: 'Admire the CSS',
        content: `
        Your eyes trace the loving lines of the sidebar and the curves of the fonts.

        ### The End
        `
      },
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

});