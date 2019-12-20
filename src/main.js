import '../src/assets/css/global.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Offers from './components/offer/Offers'
import Profiles from './components/profile/Profiles'
import Semantic from 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = true
Vue.use(VueRouter)
Vue.use(Semantic)
Vue.use(SuiVue)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/offers', name: 'offers', component: Offers },
    { path: '/profiles', name: 'profiles', component: Profiles }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
