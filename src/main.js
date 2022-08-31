import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// import element3 style
import 'element3/lib/theme-chalk/index.css'
// according to the need to import
import {
  ElLink,
  ElButton,
  ElMenu,
  ElSubmenu
  // el-menu
  // ...
} from 'element3'

createApp(App)
  .use(router)
  .use(store)
  .use(ElLink)
  .use(ElButton)
  .use(ElMenu)
  .use(ElSubmenu)
  .mount('#app')
