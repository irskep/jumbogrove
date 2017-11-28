<template>
  <section class="JGHTMLItem">
    <div v-html="item.html"></div>
    <div v-for="html in writerOutputs" v-html="html" class="JGHTMLAddition m-addition"></div>
  </section>
</template>

<script>
import _ from 'lodash';

function removeLink(el) {
  const sibling = document.createElement('span');
  sibling.className = "JGHTMLAddition m-disabled-link";
  el.style.display = 'none';
  while (el.childNodes.length > 0) sibling.appendChild(el.childNodes[0]);
  el.parentElement.insertBefore(sibling, el);
  el.parentElement.removeChild(el);
  return sibling;
}

function replace(el, html) {
  const sibling = document.createElement('span');
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
    return {writerOutputs: []};
  },
  methods: {
    getManagedAnchors: function(parent) {
      parent = parent || this.$el;
      return _.toArray(this.$el.querySelectorAll('a')).filter((el) => {
        const href = el.attributes.href;
        if (!href) return false;
        if (!this.director.isManagedLink(decodeURIComponent(href.value))) return false;
        return true;
      });
    },
    removeLinks: function() {
      this.getManagedAnchors().forEach(removeLink);
    },
    bindLinks: function(anchors) {
      anchors.forEach((el) => {
        if (el.dataset.isbound) return;
        el.dataset.isbound = "true";
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          // somehow dead elements are getting click events. Stop the madness.
          if (!el.parentElement) return;
          const href = el.attributes.href;
          const replacement = removeLink(el);
          this.director.goToSmart(decodeURIComponent(href.value), this.item.id, replacement);
        });
      });
    }
  },
  mounted: function() {
    this.bindLinks(this.getManagedAnchors());

    this.ui.bus.$on('write', ({itemId, html}) => {
      if (itemId !== this.item.id) return;
      this.writerOutputs.push(html);
    });

    this.ui.bus.$on('replace', ({itemId, html, id}) => {
      if (itemId !== this.item.id) return;
      const el = this.$el.querySelector(`#${id}`);
      if (!el) {
        console.warn("id not found:", id);
        return;
      }
      const replacement = replace(el, html);
      this.bindLinks(this.getManagedAnchors(replacement));
    });

    this.ui.bus.$on('replaceself', ({itemId, html, targetEl}) => {
      if (itemId !== this.item.id) return;
      const replacement = replace(targetEl, html);
      this.bindLinks(this.getManagedAnchors(replacement));
    });
  },

  updated: function() {
    // console.error('re-rendering html item!');
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
.JGHTMLAddition {
  animation: JGAdditionOpacity 1s;
}
.JGHTMLAddition.m-addition {
  animation-duration: 2s;
}

@keyframes JGAdditionOpacity {
  0% { opacity: 0; }
  100%: { opacity: 1; }
}
</style>
