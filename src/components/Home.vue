<template>
  <div class="home" onload="location.reload()">
    <div class="ui top attached tabular menu">
      <a class="ui blue1 active item" data-tab="profile" :class="{active: 'profile'}" @click="switchTabs('profile')">
        Profiles
      </a>
      <a class="ui blue1 item" data-tab="profile" :class="{active: 'offer'}" @click="switchTabs('offer')">
        Offres
      </a>
      <div class="ui right menu">
        <div class="ui blue1 icon input">
          <input type="text" placeholder="Search...">
          <i class="search link icon"/>
        </div>
      </div>
    </div>
    <div class="ui bottom tab segment" data-tab="offer" :class="{active: offer}">
      <Offer/>
    </div>
    <div class="ui bottom tab segment" data-tab="profile" :class="{active: profile}">
      <Profile/>
    </div>
  </div>
</template>

<script>
import Offer from './offer/Offers'
import Profile from './profile/Profiles'

export default {
  data () {
    return {
      offer: true,
      profile: false
    }
  },
  watch: {

  },
  components: {
    Profile,
    Offer
  },
  methods: {
    switchTabs(tab) {
      if (tab === 'profile') {
        this.offer = false
        this.profile = true
      } else {
        this.offer = true
        this.profile = false
      }
    }
  }
}
</script>

<style scoped>
  .segment{
    margin: 0 !important;
  }

  .home{
    margin: 7em 7% 7em 7%;
  }
</style>
