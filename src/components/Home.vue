<template>
  <div>
    <div class="ui top attached tabular menu">
      <a class="item" data-tab="profile" :class="{active: 'profile'}" @click="switchTabs('profile')">
        Profiles
      </a>
      <a class="active item" data-tab="profile" :class="{active: 'offer'}" @click="switchTabs('offer')">
        Offres
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"/>
          </div>
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
  components: {
    Profile,
    Offer
  },
  methods: {
    switchTabs (tab) {
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
