import { createRouter, createWebHistory } from 'vue-router'
import hooks from './hooks'

const routers = createRouter({
  history: createWebHistory(),
  routes: [...hooks],
})

export { routers }
