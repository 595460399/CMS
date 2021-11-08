import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
// import '@/service/axios_demo'
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' .use(ElementPlus)
// console.log(process.env)
createApp(App).use(store).use(router).mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
