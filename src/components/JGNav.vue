<template>
  <nav>
    <div class="NavHeader" v-html="model.navHeaderHTML"></div>
  </nav>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'JGNav',
  props: ['model'],
  methods: {
    getManagedAnchors: function(parent) {
      parent = parent || this.$el;
      return _.toArray(this.$el.querySelectorAll('a')).filter((el) => {
        const href = el.attributes.href;
        if (!href) return false;
        if (!this.model.isManagedLink(href.value)) return false;
        return true;
      });
    },

    bindLinks: function(anchors) {
      anchors.forEach((el) => {
        if (el.dataset.isbound) return;
        el.dataset.isbound = "true";
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!el.parentElement) return;
          const href = el.attributes.href;
          this.model.do(href.value);
        });
      });
    },
  },
  mounted: function() {
    this.bindLinks(this.getManagedAnchors());
  }
}
</script>

<style lang="scss" scoped>
</style>
