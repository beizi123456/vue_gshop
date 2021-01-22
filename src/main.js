/*
  入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
