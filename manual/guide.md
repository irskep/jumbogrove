# Guide

## Reference

[Here is the API reference.](../identifiers.html)
It has details about situations, models, qualities, and more.

## Tutorial: Basics

For our first game, we will create a simple maze for the player to
solve. **You won't need to write any JavaScript functions for this section.**

To help us keep things straight, here's a map of the maze
we'll create:

```
in +-+-+-+-+
 --> |   | |
   + + + + +
   |   |   |
   + +-+ +-+
   |   |   |
   +-+ + + +
   |   | | --> out
   +-+-+-+-+
```

All content is written in HTML and
[Markdown](https://daringfireball.net/projects/markdown/syntax).
You should read up on Markdown before continuing.
[Try it live in your browser here.](http://markdownlivepreview.com/)

### Introducing situations

A Jumbo Grove game is made of **situations**. You can also think of
them as "rooms," but we use the word "situation" because all they are
is some hypertext shown to the player, and a decision to be made
(which link to click).

The bare minimum for a Jumbo Grove game is an `id` that uniquely identifies
your game, and at least one situation:

```js
jumbogrove.jumbogrove('#game', {
  id: 'maze-game-2000',
  situations: [
    {
      id: 'start',  // the situation with id=start is how the game begins
      content: `
        You are standing at the entrance of a maze.
      ` // <- backticks let you write multi-line strings.
        //    You can indent multi-line strings as much as you want.
        //    Jumbo Grove will remove the extra spaces.
    }
  ]
});
```

If you're not an experienced JavaScript programmer, you might be doing
a lot of copying and pasting. That's OK! You might need to
[ask a lot of questions.](https://github.com/irskep/jumbogrove/issues/new)
That's also OK!

In fact, here is an **officially sanctioned copy-paste template for situations:**

```js
{
  id: 'REPLACE THIS',
  tags: [],  // like ['maze-room', 'castle']
  autosave: false,
  displayOrder: 0,  // placement in choices list
  optionText: 'Go to the copy-pasted situation',
  content: `
    # Title, if you want

    Some more text

    [Append some text](>write:text_to_append)

    [Replace this with some text](>replaceself:text_to_replace)

    [Go to another situation](@some-situation-id)

    [Perform an action](>some_action)
  `,
  snippets: {
    text_to_append: "Here is some more text.",
    text_to_replace: "I'm a little teapot"
  },
  choices: ['#maze-room', 'some-situation-id'],
  actions: {
    some_action: function(model, ui, action) {
      console.log("You did a", action);
    }
  }
}
```

It doesn't include absolutely everything, but it does have the most common fields.

### Laying out the maze

Let's assign letters to each square in the maze:

```
   +-+-+-+-+
->  A|B C|D|
   + + + + +
   |E F|G H|
   + +-+ +-+
   |I J|K L|
   +-+ + + +
   |M N|O|P ->
   +-+-+-+-+
```

Looking at the upper left, you can see that the entrance of the maze leads to
situation A.

There are two ways to write that out. Here's Option 1:

```js
jumbogrove.jumbogrove('#game', {
  id: 'maze-game',
  situations: [
    {
      id: 'start',  // the situation with id=start is how the game begins
      content: `
        You are standing at the entrance of a maze.

        [Enter the maze](@A)
      `
    },
    {id: 'A', content: "You are standing in cell A.", optionText: "Enter the maze"}
  ]
});
```

**When you write a Markdown link whose target starts with `@`, it links
to the situation with that ID** instead of behaving like a normal HTML link.
`[Enter the maze](@A)` creates a link that moves the player to situation `'A'`.

Here's Option 2:

```js
jumbogrove.jumbogrove('#game', {
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
```

Instead of writing out the link in our `content` string, we provide a list of
IDs that are OK to go to next, and the situation itself says what the
choice text should say.

Here's the maze game so far, running right in this page:

<div id="maze-1" class="jg-headless"></div>

Here's the whole maze wired up the same way. The solution is `AEFBCGKLP`.

<div id="maze-2" class="jg-headless"></div>

```js
jumbogrove.jumbogrove('#game', {
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
```

### Introducing Tags

When you specify some `choices` for your situation, you can include a
hashtag to refer to a _group_ of situations.

In this case, the `living-room` situation would provide choices for
both the `bathroom` and `bedroom` situations:

```js
jumbogrove.jumbogrove('#game', {
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
})
```

### Maze game teleporter pads

We can use this feature to add teleporter pads to a few cells of our maze.
Any teleporter room can send the user to any other teleporter room.
If we have lots of teleporters, we don't want to have to individually
connect them all!

The marked squares will contain teleporters:

```
in +-+-+-+-+
->   |   |D|
   + + + + +
   |   |   |
   + +-+ +-+
   |   |  L|
   +-+ + + +
   |M  | |  -> out
   +-+-+-+-+
```

```js
jumbogrove.jumbogrove('#game', {
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
```

The user can now take a more circuitous route to the exit:
`AEIJNMLKOP`. Here's the running code:

<div id="maze-3" class="jg-headless"></div>

That's most of what you can do without writing any JavaScript functions.

## Tutorial: Game State

In progress.