# Saving & Loading

Jumbo Grove games are saved to *browser local storage*. If you players
use Incognito Mode/Private Browsing, it won't work.

The game only saves when entering situations with `autosave: true`.

When loading a game, the whole transcript is _not_ replayed. The game
picks up where the player left off, without showing the whole history.

## Version Numbers

In addition to an `id`, you should define a `version` for your game, because
the game's savefile location is based on the version number.

## Resetting the Game

There is a special 

## Quick Example

Try navigating to a new scene and reloading the page.

<div id="save-example" class="jg-with-sidebar"></div>

```js
jumbogrove.jumbogrove('#game', {
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
};
```