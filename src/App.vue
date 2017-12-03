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

.JumboGrove .JGUI > article {
  max-width: 40rem;
  margin: auto;
}

.JumboGrove .JGUI > nav {
  padding: 0 1rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  right: calc(50% + 20rem);
}

.JumboGrove .JGUI > aside {
  padding: 0 1rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  left: calc(50% + 20rem);

  ul {
    list-style-type: none;
    padding-left: 0;

    ul ul {
      list-style-type: disc;
      list-style-position: inside;
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
</style>
