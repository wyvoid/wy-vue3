import PageNotFound from '../components/PageNotFound.vue'
export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'page not found',
    component: PageNotFound,
    meta: {
      title: '404-not found'
    }
  },  
  {
    path: '/',
    name: 'main page',
    component: () => import('../components/HelloWorld.vue'),
    meta: {
      title: '开通商户',
      requireAuth: false,
    },
  },
  {
    path: '/countrycode',
    name: 'countrycode',
    component: () => import('../components/CountryCode.vue'),
    meta: {
      title: '开通商户',
      requireAuth: false,
    },
  },
]
