import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Default from './Default.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: Default,
      name: 'default'
    }, {
      path: '/create',
      component: Default,
      name: 'default'
    }]
  })

}