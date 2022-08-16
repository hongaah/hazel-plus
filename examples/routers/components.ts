const components = [
  {
    path: '/components/dropdown-select',
    name: 'dropdown-select',
    component: () => import('@/components/dropdown-select/demo/demo.vue'),
  },
  {
    path: '/components/popup-bottom',
    name: 'popup-bottom',
    component: () => import('@/components/popup-bottom/demo/demo.vue'),
  },
]

export default components
