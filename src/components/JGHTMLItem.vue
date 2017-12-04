<template>
  <section class="JGHTMLItem" :data-itemid="item.id">
    <div v-html="item.html"></div>
    <div v-for="(html, i) in writerOutputs" :key="i" v-html="html" class="JGHTMLAddition m-addition"></div>
  </section>
</template>

<script>
import _ from 'lodash';
import animatedScrollTo from "animated-scroll-to";

function removeLink(el, extraClass = '') {
  const sibling = document.createElement('span');
  sibling.id = el.id;
  sibling.className = "JGHTMLAddition m-disabled-link " + extraClass;
  el.style.display = 'none';
  el.id = null;
  while (el.childNodes.length > 0) sibling.appendChild(el.childNodes[0]);
  el.parentElement.insertBefore(sibling, el);
  el.parentElement.removeChild(el);
  return sibling;
}

function replace(el, tag, html) {
  const sibling = document.createElement(tag);
  sibling.className = "JGHTMLAddition m-replacement";
  sibling.innerHTML = html;
  el.style.display = 'none';
  el.parentElement.insertBefore(sibling, el);
  return sibling;
}

export default {
  name: 'JGHTMLItem',
  props: ['item', 'director', 'isActiveGroup', 'ui'],
  data: function() {
    return {writerOutputs: [], uniqueId: 0};
  },
  methods: {

    getManagedAnchors: function(parent) {
      parent = parent || this.$el;
      return _.toArray(this.$el.querySelectorAll('a')).filter((el) => {
        const href = el.attributes.href;
        if (!href) return false;
        if (!this.director.isManagedLink(href.value)) return false;
        return true;
      });
    },

    removeLinks: function() {
      this.getManagedAnchors().forEach(removeLink);
    },

    bindLinks: function(anchors) {
      anchors.forEach((el) => {
        if (el.dataset.isbound) return;
        this.uniqueId += 1;
        el.id = `JGHTML-${this.item.id}-${this.uniqueId}`;
        el.dataset.isbound = "true";
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          // somehow dead elements are getting click events. Stop the madness.
          if (!el.parentElement) return;
          const href = el.attributes.href;
          this.director.focusNextElement();
          const replacement = removeLink(el, 'm-unavailable');
          this.director.handleCommandString(href.value, this.item.id, replacement.id);
        });
      });
    },

    doAnimations: function() {
      _.toArray(this.$el.querySelectorAll('.JGHTMLAddition')).forEach((child) => {
        if (child.className.indexOf('m-animated') === -1) { child.className += ' m-animated'; }
      });

      if (this.$el.className.indexOf('m-animated') === -1) { this.$el.className += ' m-animated'; }
    }
  },
  mounted: function() {
    this.bindLinks(this.getManagedAnchors());
    this.doAnimations();

    this.ui.bus.$on('write', ({itemId, html}) => {
      if (itemId !== this.item.id) return;
      this.writerOutputs.push(html);
      this.$nextTick(() => {
        this.doAnimations();
        const bottomEl = _.last(document.querySelectorAll('.m-addition'));
        if (!bottomEl) return;
        const bottomBottom = bottomEl.offsetTop + bottomEl.offsetHeight + 16;
        animatedScrollTo(bottomBottom - window.innerHeight);
      });
    });

    this.ui.bus.$on('replace', ({itemId, html, id, tag}) => {
      if (itemId !== this.item.id) return;
      const el = this.$el.querySelector(`#${id}`);
      if (!el) {
        console.warn("id not found:", id);
        return;
      }
      const replacement = replace(el, tag, html);
      this.bindLinks(this.getManagedAnchors(replacement));
      this.$nextTick(() => this.doAnimations());
    });
  },

  updated: function() {
    this.doAnimations();
  },

  watch: {
    isActiveGroup: function() {
      if (this.isActiveGroup) return;
      this.removeLinks();
    }
  }
}
</script>

<style lang="css">
.JGHTMLAddition, .JGHTMLItem {
  opacity: 0;
}
.m-inactive .JGHTMLAddition, .m-inactive .JGHTMLItem {
  opacity: 1;
}
.JGHTMLItem.m-inactive {
  opacity: 1;
}
.JGHTMLAddition.m-animated, .JGHTMLItem.m-animated {
  animation: JGAdditionOpacity 1s;
  opacity: 1;
}

@keyframes JGAdditionOpacity {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
