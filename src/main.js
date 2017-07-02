import Vue from 'vue'
const { createRouter } = require('./router')
import App from './App.vue'

// 全局CSS

import './styles/reset.css'
import './styles/form.css'

export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}