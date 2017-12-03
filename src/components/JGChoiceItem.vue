<template>
  <section class="JGChoiceItem" :data-itemid="item.id">
    <ul>
      <li v-for="choice in item.choices" v-bind:key="choice.situationId">
        <a v-if="isActiveGroup && choice.isEnabled"
           v-on:click.prevent="onClick"
           :class="{ 'm-disabled': !choice.isEnabled }"
           :data-situationid="choice.situationId"
           :data-isenabled="choice.isEnabled"
           :href="'@' + choice.situationId">
           {{ choice.text }}
        </a>
        <span v-else-if="isActiveGroup" :class="{
          'm-disabled-link': true,
        }">
          {{ choice.text }}
        </span>
        <span v-else :class="{
          'm-disabled-link': true,
          'm-selected': item.situationId === choice.situationId,
          'm-unavailable': item.situationId !== choice.situationId,
        }">
          {{ choice.text }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'JGChoiceItem',
  props: ['item', 'isActiveGroup'],
  methods: {
    onClick: function(e) {
      if (!e.target.dataset.isenabled === 'true') return;
      this.item.callback(e.target.dataset.situationid)      
    },
    focus: function() {
      const {scrollX, scrollY} = window;
      if (this.isActiveGroup && this.$el.querySelector('a')) this.$el.querySelector('a').focus();
      window.scrollTo(scrollX, scrollY);
    },
  },
  mounted: function() {
    this.focus();
  },
  updated: function() {
    this.focus();
  },
};
</script>

<style lang="scss" scoped>
.m-disabled-link.m-selected::after {
  // content: " ←";
  content: " ✔";
}
</style>
