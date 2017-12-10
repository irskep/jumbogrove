# Jumbo Grove

Jumbo Grove is a tool for writing hypertext interactive fiction. *Hypertext*
means text with links. *[Interactive fiction](https://en.wikipedia.org/wiki/Interactive_fiction)*
is a medium for storytelling that crosses over into video games.

## Features

* Desktop & mobile support
* Fully documented API
* Packaged as a single JS file or as an NPM package
* Many games require no "coding"

## Demo

If you are on the [Jumbo Grove documentation site](http://steveasleep.com/jumbogrove/)
(as opposed to reading the Readme on GitHub) then you will see a quick demo here:

<div id="firstdemo" class="jg-headless"></div>

## Demo source code 

Here's the source code for the above demo:

```js
jumbogrove.jumbogrove('#firstdemo', {
  id: 'demo',
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
```