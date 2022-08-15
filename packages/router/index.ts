import { createRouter, createWebHistory } from 'vue-router'
import hooks from './hooks'

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    ...hooks,
    {
      path: '/hooks/use-request',
      name: 'use-request',
      component: () => import('../packages/hooks/use-request/demo/demo.vue'),
    },
  ],
})

export { routers }
