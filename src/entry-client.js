import * as AV from 'leancloud-storage'
import * as axios from 'axios'
AV.init({
  appId: 'M1fK91XAoxq90usCoaGH3sHc-gzGzoHsz',
  appKey: 'bUaNHdspEmvdTxTN2RotdlLu'
})
const App = require('./App.vue')

import { createApp } from './main'

const { app, router } = createApp()

// console.info(router)
router.onReady(() => {
  // console.info('开始挂载')
  app.$mount('#app')
})