_.defer(() => {
  if (document.querySelectorAll('#firstdemo')) {
    jumbogrove.jumbogrove('#firstdemo', {
      id: 'demo',
      showNav: false,
      showAside: false,
      autoScroll: false,
      autoMoveFocus: false,
      defaultStylesheet: false,
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
  }
});