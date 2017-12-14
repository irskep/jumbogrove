# Scripting Choices

In this guide:

* `situation.optionText` as a function (`function(model, host) -> Bool`)
* `situation.getCanSee(model, host) -> Bool`
* `situation.getCanChoose(model, host) -> Bool`
* `situation.enter(model, ui, fromSituation)`
* `situation.priority`
* `model.globalState`

## Custom option text

*This section builds on the code from [the previous section](tutorial_basics.html).*

You might have noticed that when you first "Enter the maze" and then
"Go to E," one of the options is still "Enter the maze," which takes you
back to Cell A.

We can fix this using a little bit of JavaScript. `situation.optionText` can be either
a string, or a function! ([You can see a reference for all the `situation` values
here](../class/src/jg/situation.js~Situation.html).)

It looks like this:

```js
{
  id: 'my-situation',
  optionText: function(model, hostSituation) {
    return 'a string';
  }
}
```

The `model` argument will be explained later. `hostSituation` is the
situation that is presenting the choice.

Here's how we can use that in our game.
(From here on out, when we're just modifying one situation, we'll just list out
the code for that situation, instead of the whole game.)

```js
jumbogrove.jumbogrove('#game', {
  id: 'maze-game',
  situations: [
    /* ... */
    { id: 'A',

      /* THIS IS THE IMPORTANT PART */
      optionText: function(model, hostSituation) {
        if (hostSituation.id === 'start') {
          return 'Enter the maze';
        } else {
          return 'Go to A';
        }
      },
      /* end important part */

      content: "You are standing in cell A.",
      choices: ['E'] },
    /* ... */
  ]
})
```

We can also add some spice to our teleporter cells. Instead of "Go to X", they
can say "Teleport to X" if they are being presented as a choice from another
teleporter situation.

There is a method on situation objects,
[`Situation.hasTag()`](../class/src/jg/situation.js~Situation.html#instance-method-hasTag),
that we can use to quickly determine if the "host" situation (the situation presenting
the choice) has a particular tag.

```js
jumbogrove.jumbogrove('#game', {
  id: 'maze-game',
  situations: [
    /* ... */
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
    /* ... */
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
    /* ... */
  ]
})
```

If you're an experienced JavaScript programmer you might want to consolidate that
logic a bit. Go right ahead!

Here are the changes in action. You can walk to cell D by visiting cells
`AEFBCGHD`, where you can see the teleporter options.

<div id="maze-4" class="jg-headless"></div>

## Remembering things

Let's design a new maze. It will be physically smaller, but it will require
the player to find a key to solve.

```
+-------+-------+
|       |       |
|  key  | exit   
|       |       |
+-     -+- door-+
|       |       |
| start   empty |
|       |       |
+-------+-------+
```

We want our logic to look something like this:

* When the player enters the 'key' room,
  * Then remember that the player has the key.
  * Once the player has the key, stop showing the 'key' room.
* When the player enters the empty room,
  * Only show the `door` choice if they have the key.

To accomplish this task, we need to use three new features of situations.
Each one is a function you can provide which is called by Jumbo Grove
when something happens or a decision needs to be made.

* `situation.getCanSee(model, host)` may prevent the host situation from displaying
  this situation as a choice by returning `false`.
* `situation.getCanChoose(model, host)` may let the player *see* a choice,
  but not *take* it. This is so they know there is an option they haven't
  yet unlocked.
* `situation.enter(model, ui, fromSituation)` is called when the player
  enters a situation, *after* `content` has been shown.

And finally, we need to make use of the `model`. The model object
[does a lot of things.](../class/src/jg/model.js~model.html)
What we care about right now is the `model.globalState` object.

### model.globalState

This object may contain anything you like, as long as it is safe too
convert it to JSON. `globalState` is part of your game's *save file*.

Things that can be converted to JSON include:

* Numbers
* Strings (`"hello"`)
* Booleans (`true`, `false`)
* Lists or objects containing numbers, strings, or booleans

*Everything else* is unsafe to use.

### Tiny maze example

Here's our tiny maze game in full:

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="prison-escape" class="jg-headless"></div>

## Priority

Imagine you're making a game about a high school crush. The player is
at a party, and may talk to anyone. But when their crush walks in the
room, all they can do is stammer and stare.

We could write a `getCanSee` function for every person you talk to,
but it's much simpler to use `situation.priority`!

When a situation's choices have different priorities, it only shows
choices of situations *with the highest priority.*

So if situations A, B, and C have `priority: 0`, but situations E and F
have `priority: 1`, then only E and F will be presented.

All situations have priority 0 by default.

Here's a small demonstration:

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="party-crush" class="jg-headless"></div>