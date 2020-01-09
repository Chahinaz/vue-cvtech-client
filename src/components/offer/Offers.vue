<template>
  <div class="two wide two divided column">
    <div>
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="result">
       <!-- result div -->
      <div class="eight wide divided column">
        <h3 class="ui teal center header">Résultats</h3>
          <!-- profil result example-->
          <div class="ui link cards" v-for="offer in offers" :key="offer">
            <!-- desc -->
            <div class="ui card" id=offer.id>
              <div class="content">
                <div class="center aligned header">{{offer.sector}}</div>
                <div class="center aligned description">
                  <p>{{offer.post}}</p>
                  <p><i class="file code outline icon"></i>: {{offer.contracttype}} </p>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned blue author">
                  <div class="ui blue horizontal label" href="">En savoir plus</div>
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
        offer: '',
        offers: []
      }
    },
    mounted() {
      axios({method: "GET", mode: "cors", "useCredentails": true,"url":"http://localhost:3000/api/offers"}).then(res => {
        this.offers = res.data.rows;
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
</style>
