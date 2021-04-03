<template>
  <nav>
    <img class="nav-logo" src="../assets/logo.png" alt="Simian Holdings" />
    <NavItem title="Token" link="/token" />
    <NavItem title="Holders" link="/holders" />
    <NavItem title="Transfers" link="/transfers" />
    <NavItem title="Market" link="/market" />
    <NavItem title="Earnings" link="/earnings" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import NavItem from './NavItem.vue'

export default Vue.extend({
  name: 'NavBar',
  components: { NavItem },
})
</script>

<style scoped>
nav {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

nav .nav-logo {
  width: 192px;
  height: 60px;
}
</style>
