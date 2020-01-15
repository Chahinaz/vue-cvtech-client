<template>
  <sui-menu :widths="4">
    <sui-item @click="newTabUge()">
<!--      <sui-image :src=logo size="mini" spaced/>-->
      <a> UGE </a>
    </sui-item>
    <sui-item>
      <router-link :to="{name: 'home'}"> Bibliothèque </router-link>
    </sui-item>
    <sui-item>
      <router-link :to="{name: 'signin'}"> Connexion </router-link>
    </sui-item>
    <sui-item>
      <router-link :to="{name: 'signup'}"> Inscription </router-link>
    </sui-item>
  </sui-menu>
</template>

<script>
export default {
  data() {
    return {
      logo: '/src/assets/img/logo_uge.png'
    }
  },
  methods: {
    newTabUge: function () {
      window.open('http://univ-gustave-eiffel.fr/', '_blank')
    }
  }
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
