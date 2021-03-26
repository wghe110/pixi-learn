import { createApp } from 'vue'
import App from './App.vue'

import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router from './router/index'

createApp(App)
  .use(antd)
  .use(router)
  .mount('#app')