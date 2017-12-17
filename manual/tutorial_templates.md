# Templates

A situation doesn't always have to have the same text every time the
player sees it. You can use
[Nunjucks template syntax](https://mozilla.github.io/nunjucks/templating.html)
to do all kinds of cool stuff!

The Nunjucks documentation is pretty good, so this part of the tutorial
won't really dive into the ins and outs of writing templates, but there
are a few interesting topics to cover:

* Basic usage
* Template context: what variables are accessible in templates?
* Custom filters
* How Jumbo Grove uses both Nunjucks and Markdown to render text
* Advanced Markdown + CSS
* How to use another template engine instead of Nunjucks

## World's Simplest Puzzle

Here's a quick demonstration of an if-statement that reads a value from
`model.globalState`. The template context includes `model.globalState`
for convenience, so you can check it really easily.

```js
jumbogrove.jumbogrove('#game', {
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
})
```

<div id="simple-puzzle" class="jg-headless"></div>

## Template Context

The *template context* is the set of variables accessible directly
in a template.

`model` and `ui` are always accessible in the template context,
so this will always work:

```js
{% if model.globalState.someVar %}some text{% endif %}
```

Here's how the template context is created each time a template is rendered:

* Add everything from `model.globalState`
* Add `player`, if there is a player [character](../class/src/jg/character.js~Character.html)
* Add everything you put in [ui.addTemplateGetters()](../class/src/jg/dataui.js~ui.html#instance-method-addTemplateGetters)
* Add everything you put in [ui.addTemplateContext()](../class/src/jg/dataui.js~ui.html#instance-method-addTemplateContext)
* Add `model` and `ui`

## Custom Filters

You can add custom filters to templates using the `init` hook. This function
is called as soon as Jumbo Grove has parsed your game.

Here's an example of adding a `| yesNo` filter to boolean values, so you can
write `{{ myVal|yesNo }}` to get a "yes" or "no" in your text instead of
"true" or "false":

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="custom-filter-demo" class="jg-headless"></div>

For more on Nunjucks filters, [check out the Nunjucks docs.](https://mozilla.github.io/nunjucks/api.html#custom-filters)

## With Markdown & Whitespace

Any time you write the `content` for a situation, or the
`navHeader` or `asideHeader`, text is processed like this:

1. Remove left indentation
2. Run Nunjucks
3. Run MarkdownIt

Normally this will have straightforward results. But you have to be
careful not to add indentation when you don't mean to, because Markdown
treats indented text as a code block if you use four or more spaces:

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="whitespace-example-1" class="jg-headless"></div>

You can "eat" the whitespace before a `{%` or after a `%}` by adding a
dash character (`{%-` / `-%}`):

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="whitespace-example-2" class="jg-headless"></div>

## Adding CSS

Jumbo Grove makes games for web browsers. It would be a shame if you couldn't
take advantage of all those great web styling features. Fortunately,
Jumbo Grove includes a MarkdownIt extension called
[markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs),
which lets you add CSS classes to things!

You can add additional MarkdownIt extensions in your `init` callback
using `ui.md`, a `MarkdownIt` instance.

```js
jumbogrove.jumbogrove('#game', {
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
```

<div id="markdown-it-attrs-demo" class="jg-headless"></div>

## Template Comment Syntax

Because Nunjucks's comment syntax (`{# blah blah blah %}`) conflicts
with `markdown-it-attrs`'s HTML ID syntax (`{#some-id}`), Nunjucks is
configured by default to use `{## blah blah blah ##}` for comments
(two hashes instead of one on each side).

## Changing Template Engines

It is possible to do this, but it is not in this guide because it
should only be done if you really, really know what you are doing.