import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainContent from '@/components/MainContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/todo-list',
      name: 'MainContent',
      component: MainContent
    }
  ]
})
