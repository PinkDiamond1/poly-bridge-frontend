<template>
  <div @click="toggleDarkMode" class="toggle_theme_container">
    <Icon :icon="getCurrentIcon" class="toggle_theme_icon" />
  </div>
</template>

<script>
export default {
  name: 'ToggleTheme',
  methods: {
    toggleDarkMode() {
      this.$store.commit('setDarkMode', !this.darkMode);
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
    getCurrentIcon() {
      return this.darkMode ? 'akar-icons:moon-fill' : 'akar-icons:sun-fill';
    },
  },
};
</script>

<style lang="scss">
.toggle_theme_container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 8px;
  margin-left: 10px;
  border: 2px solid var(--color-line-base);
  border-radius: 7px;
}
.toggle_theme_icon {
  font-size: 25px;
}
</style>
