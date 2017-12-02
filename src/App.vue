<template>
  <div class="JumboGrove">
    <JGUI :director="director"></JGUI>
  </div>
</template>

<script>
import JGUI from '@/components/JGUI'
export default {
  name: 'app',
  props: ['director'],
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
  position: absolute;
  top: 0;
  left: 0;
  right: calc(50% + 20rem);
}

.JumboGrove .JGUI > aside {
  padding: 0 1rem;
  position: absolute;
  top: 0;
  right: 0;
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

.character {
  font-style: normal;
  font-weight: bold;
}
</style>
