/*
  入口js
*/
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import './mock/mockServer'
import './filters/index' //加载过滤器
/*注意：和css引入语法同*/

const loadimage = require('./common/imgs/loading.gif')
Vue.component(Button.name, Button)
Vue.use(VueLazyload, {//内部自定义一个指令lazy
    loading: loadimage,
})
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
