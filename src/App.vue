<template>
  <div class="JumboGrove">
    <JGUI :director="director" :ui="ui"></JGUI>
  </div>
</template>

<script>
import JGUI from '@/components/JGUI'
export default {
  name: 'app',
  props: ['director', 'ui'],
  components: { JGUI },
}
</script>

<style lang="scss">
h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  font-weight: normal;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
}

h4 {
  font-size: 1.2rem;
  font-weight: normal;
}

// don't make safari zoom in on text fields
input,
input[type=text],
input[type=number],
textarea {
  font-size: 18px;  // min is 16
}

blockquote {
  font-style: italic;
  color: #888;
}

.JumboGrove {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.JumboGrove .JGUI > nav {
  padding: 0 1rem;
}

.JumboGrove .JGUI > nav {
  overflow: auto;
}

.JumboGrove .JGUI > aside {
  padding: 0 1rem;
  overflow: auto;
  background-color: white;

  ul {
    list-style-type: none;
    padding-left: 0;

    ul ul {
      list-style-type: disc;
      list-style-position: inside;
    }
  }
}

.JumboGrove .JGUI > article {
  max-width: 34rem;
}

.JumboGrove .JGUI > nav {
  display: none;
}

.JumboGrove .JGUI nav.m-within-aside {
  display: block;
}

@media (max-width: 51rem) {
  .JumboGrove .JGUI > aside {
    position: fixed;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    overflow: scroll;

    &.m-closed {
      background-color: transparent;
      pointer-events: none;
      .JGAsideContents {
        display: none;
      }    
    }

    &.m-open {
      border: 1px solid black;

      .JGAsideToggle {
        top: 2px; right: 2px; width: 44px; height: 44px; line-height: 44px;
      }
    }

    .JGAsideToggle {
      position: absolute;
      top: 3px; right: 3px; width: 44px; height: 44px; line-height: 44px;
      text-align: center;
      font-size: 36px;
      background-color: black;
      color: white;
      cursor: pointer;
      pointer-events: initial;
    }
  }
}

@media (min-width: 51rem) and (max-width: 64rem) {

  .JumboGrove .JGUI > article {
    max-width: 100%;
    width: 66%;
  }

  .JumboGrove .JGUI > aside {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 33%;

    .JGAsideToggle { display: none; }
    &.m-closed {
      .JGAsideContents { display: block; }    
    }
  }
}

@media (min-width: 64rem) {
  .JumboGrove .JGUI > article {
    max-width: 34rem;
    margin: auto;
  }

  .JumboGrove .JGUI > nav {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    right: calc(50% + 20rem);
  }

  .JumboGrove .JGUI nav.m-within-aside {
    display: none;
  }

  .JumboGrove .JGUI > aside {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: calc(50% + 20rem);

    .JGAsideToggle { display: none; }
    &.m-closed {
      .JGAsideContents { display: block; }    
    }
  }
}

.JumboGrove .m-disabled-link {
  &.m-unavailable {
    // text-decoration: line-through;
    // opacity: 0.5;
  }
}

.JGUIScrollSpacer {
  height: 2000px;
}
.m-active {
  // background-color: #fffacc;
}
.m-active-group {
  // background-color: #fffaee;
}

// ld40 stuff
.JumboGrove aside ul {
  li {
    list-style-type: none;
  }
}
.center {text-align: center;}
.title {
  text-align: center;
  border-top: 1px solid black;
  padding-top: 1rem;
  font-size: 2rem;
}
.character {
  font-style: normal;
  font-weight: bold;
}
.stat {
  background-color: #ffd;
}

// pixel art!
img.headshot {
    image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges;          /* Firefox                        */
    image-rendering: -o-crisp-edges;            /* Opera                          */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated; /* Chrome */
    image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */

    display: block;
    margin: auto;
    width: 64px; height: 64px;
}
</style>
