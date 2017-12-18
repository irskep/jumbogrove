# Jumbo Grove

Jumbo Grove is a tool for writing hypertext interactive fiction. *Hypertext*
means text with links. *[Interactive fiction](https://en.wikipedia.org/wiki/Interactive_fiction)*
is a medium for storytelling that crosses over into video games.

Jumbo Grove requires beginner-level knowledge of JavaScript, but more
experienced developers will find plenty of useful stuff!

## Features

* Desktop, mobile, and gamepad support
* Fully documented API with tutorials
* Packaged as a single JS file _or_ as an NPM package
* Many games require no "coding"
* Friendly template language; never write raw HTML

## Quick Start

You can put up a fresh site with Jumbo Grove in less than 30 seconds by
[remixing this project on Glitch.](https://glitch.com/edit/#!/remix/jumbo-grove-demo)
You can edit the game in a browser and it will live-update a real site!

If you're using a bundler like Webpack, you can simply `npm install jumbogrove`
and `import {jumbogrove} from 'jumbogrove'`.

If that's too much trouble for you, please grab
[jumbogrove.js](https://github.com/irskep/jumbogrove/raw/standalone/jumbogrove.js)
and [jumbogrove.css](https://github.com/irskep/jumbogrove/raw/standalone/static/css/app.css).

## Docs

If you're new, [read the tutorial](http://steveasleep.com/jumbogrove/manual/tutorial_basics.html).

If you're not, [check out the API](http://steveasleep.com/jumbogrove/identifiers.html).

## Demo

Jumbo Grove was used to make [this unfinished Ludum Dare game.](http://steveasleep.com/please-come-in)

If you are on the [Jumbo Grove documentation site](http://steveasleep.com/jumbogrove/)
(as opposed to reading the Readme on GitHub) then you will see a quick demo here:

<div id="firstdemo" class="jg-headless"></div>

There are many more live demos in the guides!

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

## Related Projects

### Beginner

[Twine.](http://twinery.org)

### Intermediate

The biggest inspiration for this project is
[Undum](https://github.com/sequitur/undum) and the
[Raconteur](http://raconteur.readthedocs.io/en/latest/) layer on top of it.
This project was prompted by a desire to make "Undum done right," with
2017-era best practices and great documentation.

[Salet](https://salet.su/en/guide) is another similar project with slightly
different goals, a different API, and different features. If Jumbo Grove isn't
quite right for you, Salet is probably what you're looking for.

### Expert

[Windrift](https://github.com/lizadaly/windrift) is very linear-story-oriented,
and requires a high level of JavaScript expertise, but has been used to make
some really great stuff and is well-designed.