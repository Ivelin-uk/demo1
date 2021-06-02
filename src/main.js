import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import users from './components/users.vue'
import input from './components/input.vue'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false
Vue.component('app-users',users);
Vue.component('app-users-input',input);

new Vue({
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
