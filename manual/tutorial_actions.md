# Actions

In this guide:

* What are actions?
* Writing your own actions
* Built-in actions; snippets
* Multiple actions in one link

## What are actions?

So far, this manual has talked about **situations** and **choices**.
There has been a simple game loop: read a situation, make a decision,
repeat.

But we can do so much more with hypertext! **Actions** let you add
some nonlinearity and interactivity to your situations.

In Jumbo Grove, an action is when you write a link like this:

```md
Blah blah blah [link text](>action_name:action_argument)
```

You add a link to your Markdown and have the link target start with `>`.
When Jumbo Grove renders your text, it looks over the output to find
specially formatted links like this. (You may recall that you can do
something similar with situation links, if you use `@`.)

You can add as many arguments as you want, or no arguments:

```md
[link text](>action_name)  <!-- no arguments -->
[link text](>action_name:arg1:arg2)  <!-- two arguments arguments -->
```

When the user clicks the link, Jumbo Grove calls the *action function*
you define, or a built-in action.

Here's a simple example. The player is in a gym and they can work out
on the various machines.

<div id="workout" class="jg-headless"></div>

Here's the source code for that example:

```js
jumbogrove.jumbogrove('#game', {
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
```

## Built-in Actions

There is a popular kind of interactive fiction presentation where you
click links and they expand text or just write text to the end of the
transcript, or some specific point. Jumbo Grove has built-in actions
for all of these cases.

Here is a quick example:

<div id="woods" class="jg-headless"></div>

Here's how it works:

```js
jumbogrove.jumbogrove('#game', {
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
```

You can get really fancy with these things. You could write a whole game with
just one situation!

The built-in actions use the special `snippets` object. It's a mapping of IDs
to Markdown templates.

It's OK to put action links, situation links, and template syntax
in your snippets!

### `write`

The `write` action appends a snippet to the transcript.

If you have some text like this:

```md
I am listening to [the wind](>write:hear_the_wind)
```

And a snippet like this:

```js
snippets: {
  hear_the_wind: "The wind rustles the leaves."
}
```

Then when you click the link, the link will turn into plain text,
and the text "The wind rustles the leaves" will be added to the end
of your content.

### `replaceself`

The `replaceself` action replaces the link with the contents of a snippet.
If you have some text like this:

```md
Demo of [a snippet](>replaceself:be_cool)
```

and you have a snippet like this:

```js
snippets: {
  be_cool: "a really cool snippet"
}
```

Then when you click the link "a snippet", it will be replaced with non-linked
text that says "a really cool snippet".

### `replace`

This is a tricky one. The `replaceself` action replaces *the DOM element
with the same ID as the snippet*, with the contents of the snippet.

So if you have some text like this:

```md
This paragraph will be replaced. {#replacement_example}

[Replace the paragraph](>replace:replacement_example)
```

And a snippet like this:

```js
snippets: {
  replacement_example: "This is the new text!"
}
```

Then when you click "Replace the paragraph", the first paragraph will be replaced
with the contents of the snippet.

In the Markdown part of the example, the `{#replacement_example}` part is what
assigns the ID attribute to the paragraph element. For details about using this
syntax, read [the markdown-it-attrs docs.](https://www.npmjs.com/package/markdown-it-attrs)

## Multiple Actions, One Link

It is possible to trigger multiple actions from one link. Just separate them
with a `;` character.

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="multi-action" class="jg-headless"></div>

You can use this technique to save yourself having to write a lot of
custom action JavaScript if all you want to do is replace some text
and go to another situation.

Here's a rewrite of the gym example using this technique:

<div id="workout-2" class="jg-headless"></div>