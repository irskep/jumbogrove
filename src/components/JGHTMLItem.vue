<template>
  <section class="JGHTMLItem" v-html="item.html">
  </section>
</template>

<script>
import _ from 'lodash';
// TODO: post-process <a href="@blah">
export default {
  name: 'JGHTMLItem',
  props: ['item', 'director', 'isActiveGroup'],
  methods: {
    getManagedAnchors: function() {
      return _.toArray(this.$el.querySelectorAll('a')).filter((el) => {
        const href = el.attributes.href;
        if (!href) return false;
        if (!this.director.isManagedLink(decodeURIComponent(href.value))) return false;
        return true;
      });
    },
    removeLinks: function() {
      this.getManagedAnchors().forEach((el) => {
        const sibling = document.createElement('span');
        sibling.className = "m-disabled-link"
        el.style.display = 'none';
        while (el.childNodes.length > 0) sibling.appendChild(el.childNodes[0]);
        el.parentElement.insertBefore(sibling, el);
      });
    },
  },
  mounted: function() {
    this.getManagedAnchors().forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const href = el.attributes.href;
        this.director.goToSmart(decodeURIComponent(href.value));
      });
    });
  },
  watch: {
    isActiveGroup: function() {
      if (this.isActiveGroup) return;
      this.removeLinks();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
