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
        content: "You are standing in cell D.",
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
        content: "You are standing in cell L.",
        choices: ['K', 'P', '#teleporter']
      },
      {
        id: 'M',
        tags: ['teleporter'],
        optionText: "Go to M",
        content: "You are standing in cell M.",
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

});