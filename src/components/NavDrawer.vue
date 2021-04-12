<template>
  <v-navigation-drawer app dark v-model="drawerState" color="primary">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.name" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from '@/router/routes'

const items = routes.map((x) => {
  return { name: x.name, icon: 'mdi-view-dashboard', path: x.path }
})

export default {
  name: 'NavDrawer',
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

<style scoped></style>
