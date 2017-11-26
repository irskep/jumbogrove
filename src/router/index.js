import Vue from 'vue'
import Router from 'vue-router'
import JGUI from '@/components/JGUI'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'JGUI',
      component: JGUI,
    },
  ]
})
