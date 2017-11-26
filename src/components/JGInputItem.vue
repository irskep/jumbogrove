<template>
  <section class="JGInputItem">
    <form v-on:submit.prevent="onSubmit">
        <input
          :placeholder="item.placeholder"
          :disabled="!isActiveGroup"
          v-model="text">
        </input>
    </form>
  </section>
</template>

<script>
export default {
  name: 'JGInputItem',
  props: ['item', 'isActiveGroup'],
  data: () => ({ text: '' }),
  methods: {
      onSubmit: function() {
          this.item.callback(this.text);
      }
  },
  mounted: function() {
    const {scrollX, scrollY} = window;
    if (this.isActiveGroup) this.$el.querySelector('input').focus();
    window.scrollTo(scrollX, scrollY);
  },
}
</script>

<style lang="scss" scoped>
</style>
