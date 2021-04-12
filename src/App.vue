<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <NavDrawer />
    <NavBarVue />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBarVue from './components/NavBar.vue'
import NavDrawer from './components/NavDrawer.vue'

export default Vue.extend({
  name: 'App',
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  components: {
    NavDrawer,
    NavBarVue,
  },

  data: () => ({
    //
  }),
})
</script>

<style></style>
