import { createRouter, createWebHistory } from 'vue-router'
import components from './components'
import hooks from './hooks'

const routers = createRouter({
  history: createWebHistory(),
  routes: [...components, ...hooks],
})

export { routers }
