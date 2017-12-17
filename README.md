# Jumbo Grove

Jumbo Grove is a tool for writing hypertext interactive fiction. *Hypertext*
means text with links. *[Interactive fiction](https://en.wikipedia.org/wiki/Interactive_fiction)*
is a medium for storytelling that crosses over into video games.

## Features

* Desktop, mobile, and gamepad support
* Fully documented API
* Packaged as a single JS file or as an NPM package
* Many games require no "coding"

## Quick Start

You can put up a fresh site with Jumbo Grove in less than 30 seconds by
[remixing this project on Glitch.](https://glitch.com/edit/#!/remix/jumbo-grove-demo)
You can edit the game in a browser and it will live-update a real site!

## Docs


### [Tutorial](http://steveasleep.com/jumbogrove/manual/tutorial_basics.html)

### [API](http://steveasleep.com/jumbogrove/identifiers.html)

## Demo

Jumbo Grove was used to make [this unfinished Ludum Dare game.](http://steveasleep.com/please-come-in)

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

## "Jumbo Grove"?

Interactive Fiction = IF  
I + 1, F + 1 = J, G  
J[umbo] G[rove]
