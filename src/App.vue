<template>
  <div>
    <div>
      <Menu/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
