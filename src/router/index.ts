import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Token from '../views/Token.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'Token',
    path: '/token',
    component: Token,
  },
]

const router = new VueRouter({
  routes,
})

export default router
