import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { routes } from '@/router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

export default router
