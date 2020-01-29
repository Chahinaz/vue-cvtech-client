import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Offers from './components/offer/Offers'
import Profiles from './components/profile/Profiles'
import CGU from './components/CGU'
import Semantic from 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
import env from 'dotenv';
import axios from 'axios'
import "./assets/css/global.css"

env.config();
Vue.config.productionTip = true
Vue.use(VueRouter)
Vue.use(Semantic)
Vue.use(SuiVue)

/** Authentication value */
Vue.prototype.$loggedIn = localStorage.getItem('jwt') !== null && localStorage.getItem('jwt') !== '';

/** Routes */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/cgu', name: 'cgu', component: CGU },
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/offers', name: 'offers', component: Offers, meta: {requiresAuth: true} },
    { path: '/profiles', name: 'profiles', component: Profiles, meta: {requiresAuth: true} },
    // { path: '/profile/:id', data: {id}, component: Profiles.id}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default axios.create({
  url: process.env.VUE_APP_DOMAIN_URL,
  loggedIn: this.$loggedIn,
  /** Tokens */
  headers: { "Authorization" : `Bearer ${localStorage.getItem('jwt')}` }
});
