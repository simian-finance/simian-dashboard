<template>
  <v-app-bar app dark color="primary" src="../assets/logo.png">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" contain alt="Simian Holding" />
    </template>
    <v-app-bar-nav-icon @click="drawerState = !drawerState" />
    <v-app-bar-title v-if="!$vuetify.breakpoint.xsOnly">Simian Finance</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Icons-->
    <v-token-items class="hidden-sm-and-down">
      <v-btn icon href="https://t.me/simianfinance">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/orgs/simian-finance/">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-token-items>

    <!-- Tabs-->
    <template v-slot:extension v-if="!$vuetify.breakpoint.xsOnly">
      <v-tabs align-with-title color="accent">
        <v-tab v-for="item in items" :key="item.name" :to="item.path">
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { routes } from '@/router/routes'

const items = routes.map((x) => {
  return { name: x.name, icon: 'mdi-view-dashboard', path: x.path }
})

export default {
  name: 'NavBarVue',
  data() {
    return {
      items,
    }
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.getters.drawerState
      },
      set(v) {
        return this.$store.commit('toggleDrawerState', v)
      },
    },
  },
}
</script>

<style></style>
