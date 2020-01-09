import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Offers from './components/offer/Offers'
import Profiles from './components/profile/Profiles'
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

export default axios.create({
  url: process.env.URL,
  /** Tokens */
  // headers: { "Authorization" : "Bearer ${process.env.token}" }
});
