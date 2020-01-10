<template>
  <div class="profiles">
    <div class="search">
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="margin">
      <div class="ui internally celled grid">
        <!-- result div -->
        <div class="wide divided column">
          <h3 class="ui teal center header">Résultats</h3>
            <!-- profil result example-->
          <sui-card-group :items-per-row="4">
              <!-- desc -->
              <sui-card v-for="profile in profiles" :key="profile" id=profile.id>
                <sui-card-content>
                  <sui-card-header>{{profile.firstname}} {{profile.lastname}}</sui-card-header>
                  <sui-card-description>
                    <p>{{profile.description}}</p>
                    <p><i class="file code outline icon"></i>: {{profile.skills.toString()}}</p>
                  </sui-card-description>
                </sui-card-content>
                <sui-card-content extra>
                  <div class="center aligned author">
                    <img class="ui avatar image" src="https://react.semantic-ui.com/images/avatar/large/molly.png"> {{profile.img}}
                  </div>
                </sui-card-content>
              </sui-card>
          </sui-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchOpt from '../searchTools/SearchOpt'
import axios from 'axios'

export default {
  data() {
    return {
      profile: '',
      profiles: []
    }
  },
  mounted() {
    axios({method: "GET", mode: "cors", "useCredentails": true,"url":`${process.env.VUE_APP_DOMAIN_URL}/profiles`}).then(res => {
      this.profiles = res.data.rows;
    }, error => {
      console.error(error);
    });
  },
  components: {
    SearchOpt
  }
}
</script>

<style scoped>
  .margin{
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 1rem;
  }
</style>
