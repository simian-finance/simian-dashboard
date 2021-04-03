<template>
  <div class="app">
    <header>
      <NavBar />
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './components/NavBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #2c1459;
  font-family: 'Barlow', sans-serif;
  font-size: 1.1em;
}

header {
  width: 100vw;
  background-color: #2c1459;
  padding: 16px;
}

.container {
  margin: 64px;
  padding: 0;
}
</style>
