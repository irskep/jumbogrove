<template>
  <div class="JGUI">
    <JGNav :model="model"></JGNav>
    <article>
      <hgroup>
        <component
          v-for="item in ui.content"
          :is="ui.componentMap[item.type]"
          :key="item.id"
          :class="{ 'm-active': item.id === currentItemId, 'm-inactive': item.id !== currentItemId, 'm-active-group': item.groupId == ui.currentGroupId }"
          :isActive="item.id === currentItemId"
          :isActiveGroup="item.groupId === ui.currentGroupId"
          :item="item"
          :director="director"
          :ui="ui">
        </component>
      </hgroup>
      <div class="JGUIScrollSpacer"></div>
    </article>
    <JGAside :model="model"></JGAside>
  </div>
</template>

<script>
import VueUI from "../jg/vueui";
import JGAside from "./JGAside";
import JGNav from "./JGNav";
import animatedScrollTo from "animated-scroll-to";
import _ from 'lodash';

export default {
  name: 'JGUI',
  props: ['director'],
  components: { JGAside, JGNav },
  data: function() {
    const ui = new VueUI();
    this.director.bindToUI(ui);
    return {
      ui,
      model: this.director.model,
      mobileSelectedTab: 'log',  // or 'menu', 'aside'
    };
  },
  computed: {
    currentItemId: function() { return this.ui.currentItemId; },
  },
  mounted: function() {
    this.director.start();
    this.ui.bus.$on('refocus', () => {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });
  },
  watch: {
    currentItemId: function() {
      this.$nextTick(() => {
        const topEl = _.first(document.querySelectorAll('.m-active-group'));
        const bottomEl = _.last(document.querySelectorAll('.m-active-group'));
        if (!bottomEl) return;
        const bottomBottom = bottomEl.offsetTop + bottomEl.offsetHeight + 16;
        if (bottomBottom - topEl.offsetTop > window.innerHeight) {
          animatedScrollTo(topEl);
        } else {
          animatedScrollTo(bottomBottom - window.innerHeight);
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
  .JGUIScrollSpacer {
    height: 2000px;
  }
  .m-active {
    background-color: #fffacc;
  }
  .m-active-group {
    background-color: #fffaee;
  }
</style>
