import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import users from './components/users.vue'

Vue.config.productionTip = false
Vue.component('app-users',users);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
