import HezalPlus from 'hazel-plus'
import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import './var.css'

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    app.use(HezalPlus)
    app.component('demo', DemoBlock)
  },
}
