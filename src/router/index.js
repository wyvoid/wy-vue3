import { createRouter, createWebHistory } from 'vue-router'
import routers from './routers'

const routerHistory = createWebHistory()

console.log(routerHistory)
const router = createRouter({
  history: routerHistory,
  routes: [
    ...routers,
  ]
})

router.beforeEach(function(to, from ,next) {

  const token = localStorage.getItem('token')

  if(to.meta.title) {
    document.title = to.meta.title
  }

  if(to.meta.requireAuth && !token) {
    // axios.defaults.headers.common['Authorization'] = '
    next('/index/getCode')
  }else{
    next()
  }
})

export default router
