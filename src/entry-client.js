const App = require('./App.vue')

import { createApp } from './main'

const { app, router } = createApp()

console.info(router)
router.onReady(() => {
  console.info('开始挂载')
  app.$mount('#app')
})