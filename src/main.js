import Vue from 'vue'
import App from './App.vue'
import router from './routes/router';
import { store } from './store/store';
import Vuetify from 'vuetify'


// import 'bootstrap'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
