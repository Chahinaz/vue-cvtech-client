<template>
  <div class="profiles">
    <div class="search">
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="margin">
      <div class="ui internally celled grid">
        <!-- result div -->
        <div class="eight wide divided column">
          <h3 class="ui teal center header">Résultats</h3>
            <!-- profil result example-->
            <div class="ui link cards" v-for="profile in profiles" :key="profile">
              <!-- desc -->
              <div class="ui card" id=profile.id>
                <div class="content">
                  <div class="center aligned header">{{profile.firstname}} {{profile.lastname}}</div>
                  <div class="center aligned description">
                    <p>Apprentie développeuse</p>
                    <p>{{profile.description}}</p>
                    <p><i class="file code outline icon"></i>: Java, HTML, CSS, JS (Vue/Nuxt) {{profile.skills}}</p>
                  </div>
                </div>
                <div class="extra content">
                  <div class="center aligned author">
                    <img class="ui avatar image" src="https://react.semantic-ui.com/images/avatar/large/molly.png"> {{profile.img}}
                  </div>
                </div>
              </div>
            </div>
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
    axios({method: "GET", mode: "cors", "useCredentails": true,"url":"http://localhost:3000/api/profiles"}).then(res => {
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
    margin-top: 1rem;
  }
</style>
