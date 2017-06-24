import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Default from './Default.vue'
import Create from './pages/Create.vue'

export function createRouter() {
  return new Router({
    // mode: 'history',
    routes: [{
      path: '/',
      component: Default,
      name: 'default'
    }, {
      path: '/create',
      component: Create,
      name: 'create'
    }]
  })

}