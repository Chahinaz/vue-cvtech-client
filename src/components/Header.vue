<template>
  <div class="ui blue four item menu">
    <a class="item"  href="http://univ-gustave-eiffel.fr/">
      <svg width="30px" height="20px">
        <img class="ui small" src="/assets/img/logo_uge.svg">
      </svg>
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
  components: {
  }
}
</script>

<style>
  a, router-link {
    color: #FFFFFF !important;
    background-color: #2f2a85 !important;
    font-family: "Tahoma", serif;
    font-size: 1.2rem;
  }

  svg {
    margin: 0 !important;
  }
</style>
