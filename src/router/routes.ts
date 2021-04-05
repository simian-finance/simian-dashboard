import { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Token from '@/views/Token.vue'

export const routes: Array<RouteConfig> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Token',
    path: '/token',
    component: Token,
  },
]
