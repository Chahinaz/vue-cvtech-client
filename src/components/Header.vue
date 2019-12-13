<template>
  <div class="ui blue four item menu">
    <a class="item"  @click="newTabUge()">
        <img class="ui small" src="/src/assets/img/logo_uge.svg" alt="">
    </a>
    <router-link :to="{name: 'home'}" class="item">
      Home
    </router-link>
    <router-link :to="{name: 'signin'}" class="item">
      Sign-in
    </router-link>
    <router-link :to="{name: 'signup'}" class="item">
      Sign-up
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    newTabUge: function () {
      window.open('http://univ-gustave-eiffel.fr/', '_blank')
    }
  }
}
</script>

<style scoped>
  a, router-link {
    color: #FFFFFF !important;
    background-color: #1eafd0 !important;
    font-family: "Tahoma", serif;
    font-size: 1.2rem;
  }

  svg {
    margin: 0 !important;
  }
</style>
