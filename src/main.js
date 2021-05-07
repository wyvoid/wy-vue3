import { createApp, h } from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'


const app = createApp({
  router,
  render: () => h(App)
})

app.config.globalProperties.$bus = createApp()

app.use(router)

app.mount('#app')
