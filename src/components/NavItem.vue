<template>
  <div class="nav-item">
    <router-link :to="link">{{ title }}</router-link>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NavItem',
  props: {
    title: String,
    link: String,
  },
})
</script>

<style scoped>
.nav-item {
  color: #fff;
  padding: 16px 24px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .nav-item:hover {
  color: #ffc50c;
  border-bottom-color: #ffc50c;
}

nav .nav-item a {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
