// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/website/main.css'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    parseURL(url) {
      let parsedURL = new URL(url)
      return parsedURL
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
