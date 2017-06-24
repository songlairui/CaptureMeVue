import Vue from 'vue'
const { createRouter } = require('./router')
import App from './App.vue'

export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}