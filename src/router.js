import VueRouter from 'vue-router'
import main from './views/home'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: main
    }
  ]
})