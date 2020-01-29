<template>
  <div>
    <sui-menu v-if="!this.$loggedIn" :widths="4">
      <sui-item v-on:click.native="newTabUge()">
       <router-link :to="{name: ''}" target="_blank"> UGE </router-link>
<!--        <sui-image :src=logo size="mini" spaced/>-->
      </sui-item>
      <sui-item>
        <router-link :to="{name: 'home'}" v-on:click.native="reload()"> Bibliothèque </router-link>
      </sui-item>
      <sui-item>
        <router-link :to="{name: 'signin'}"> Connexion </router-link>
      </sui-item>
      <sui-item>
        <router-link :to="{name: 'signup'}"> Inscription </router-link>
      </sui-item>
    </sui-menu>
    <sui-menu v-else :widths="4">
      <sui-item @click="newTabUge()">
        <sui-image :src=logo size="mini" spaced/>
        <a> UGE </a>
      </sui-item>
      <sui-item>
        <router-link :to="{name: 'home'}" v-on:click.native="reload()"> Bibliothèque </router-link>
      </sui-item>
      <sui-item>
        <router-link :to="{name: ''}"> Profile </router-link>
      </sui-item>
      <sui-item>
        <router-link :to="{name: 'home'}" v-on:click.native="logout()"> Logout </router-link>
      </sui-item>
    </sui-menu>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      logo: '/src/assets/img/logo_uge.png'
    }
  },
  methods: {
    reload(e) {
      e.preventDefault();
      this.$router.reload();
    },
    async logout() {
      console.log(`login out`);
      localStorage.removeItem('jwt');
      this.$router.go('home');
      // axios.get(`${process.env.VUE_APP_DOMAIN_URL}/logout`).then(res => {
      //   console.log(res);
      //   localStorage.removeItem('jwt');
      //   this.$router.push({ name: 'home' });
      // }).catch(err => {
      //   console.log(err);
      // })
    },
    newTabUge() {
      window.open('http://univ-gustave-eiffel.fr/', '_blank')
    }
  },
}
</script>

<style scoped>
  a {
    background-color: #FFFFFF !important;
    color: #1eafd0 !important;
    font-family: "Tahoma", serif;
    font-size: 1.2rem;
  }

  svg {
    margin: 0 !important;
  }
</style>
