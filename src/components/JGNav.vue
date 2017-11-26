<template>
  <nav>
    <div class="NavHeader" v-html="model.navHeaderHTML"></div>
  </nav>
</template>

<script>
export default {
  name: 'JGNav',
  props: ['model'],
}
</script>

<style lang="scss" scoped>
</style>
