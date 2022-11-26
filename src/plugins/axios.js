import Vue from "vue";
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://exercises-vue-default-rtdb.firebaseio.com/'
    })
  }
})