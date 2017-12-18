# Characters

In this guide:

* What is a character?
* What is a quality?
* Working with characters and qualities

## Characters and Qualities

It's possible to use only `model.globalState` to store your game's state,
sometimes even desirable, but Jumbo Grove includes another way: *characters*.

A character is a collection of *qualities*. A quality is a value (string,
number, or boolean) with a human-readable name.

As an example, consider a game about a group's survival in a zombie apocalypse.
Here's what each character's qualities would look like:

* Integer value 1-10 representing hunger, displayed as one of these words:
  (stuffed, full, satisfied, not hungry, a little hungry, very hungry,
   super hungry, famished, ravenous, starving)
* Boolean value for whether they are sleeping or not

All characters must be defined at the start of the game. It is not currently
possible to add or remove characters.

Here's a quick example of working with characters in a function:

<div id="character-example" class="jg-with-sidebar"></div>

Here's the code for the example:

```js
jumbogrove.jumbogrove('#game', {
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
```

Since this feature requires more JavaScript knowledge, this guide won't dig
in to qualities, since you can probably figure it out from the API. Please
[open a GitHub issue](https://github.com/irskep/jumbogrove/issues/new) if
you have trouble.

## Character State

You can store whatever JSON-safe values you like on the `.state` attribute of
a character. These values are restored when you save and load.