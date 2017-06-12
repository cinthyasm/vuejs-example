import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoList from '@/components/TodoList'

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
      name: 'TodoList',
      component: TodoList
    }
  ]
})
