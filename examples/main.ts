import { createApp } from 'vue'
import App from './App.vue'
import { routers } from './routers'
// import * as HazelPlus from 'hazel-plus'
import 'hazel-plus/dist/style.css'

createApp(App).use(routers).mount('#app')
