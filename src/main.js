import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'wowjs/dist/wow.min.js'
import 'owlcarousel/owl-carousel/owl.carousel.js'
import 'superfish/dist/js/superfish.min.js'
import './firebase'
import './assets/js/main.js'
import './assets/lib/sticky/sticky.js'

import './style/style.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'owlcarousel/owl-carousel/owl.carousel.css'
import 'superfish/dist/css/superfish.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')