import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Areas from '@/components/Areas'
import Questions from '@/components/Questions'
import Students from '@/components/Students'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/areas',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'areas',
          component: Areas
        },
        {
          path: 'questions',
          component: Questions
        },
        {
          path: 'students',
          component: Students
        },
      ]
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
    }
  ]
})
