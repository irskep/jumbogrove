<template>
  <aside :class="{'JGAside': true, 'm-open': isOpen, 'm-closed': !isOpen}">
    <div class="JGAsideToggle" v-on:click.stop="onToggleVisibility">
      {{ isOpen ? '&times;' : 'i'}}
    </div>
    <div class="JGAsideContents">
      <JGNav class="m-within-aside" :model="model"></JGNav>
      <hgroup>
        <div v-html="model.asideHeaderHTML()"></div>
        <ul class="Characters">
          <li v-for="character in model.allCharacters" v-if="character.showInSidebar" :key="character.id">
            <h2>{{ character.name }}</h2>
            <ul class="CharacterQualityGroups">
              <li v-for="group in character.sortedQualityGroups"
                  :key="group.id"
                  v-if="!group.hidden">
                <h3>{{ group.name }}</h3>
                <ul class="CharacterQualities">
                  <li v-for="quality in character.sortedQualities(group.id)"
                      :key="quality.id"
                      v-if="!quality.hidden && (quality.type != 'flag' || quality.value)">
                    <template v-if="quality.type == 'flag'">{{ character.formatQuality(quality.id) }}</template>
                    <template v-else><strong>{{ quality.name }}:</strong> {{ character.formatQuality(quality.id) }}</template>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </hgroup>
    </div>
  </aside>
</template>

<script>
import JGNav from "./JGNav";

export default {
  name: 'JGAside',
  components: { JGNav },
  props: ['model'],
  data: function() { return {isOpen: false}; },
  methods: {
    onToggleVisibility: function() {
      console.log("Go")
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
