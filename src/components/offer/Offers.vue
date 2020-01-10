<template>
  <div class="two wide two divided column">
    <div>
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="result">
       <!-- result div -->
      <div class="wide divided column">
        <h3 class="ui teal center header">Résultats</h3>
        <!-- profil result example-->
        <sui-card-group :items-per-row="4">
          <!-- desc -->
          <sui-card v-for="offer in offers" :key="offer" class="ui card" id=offer.id>
            <sui-card-content>
              <sui-card-header>{{offer.sector}}</sui-card-header>
              <sui-card-description>
                <p>{{offer.post}}</p>
                <p v-if="offer.contracttype != null"><i class="file code outline icon"></i>: {{offer.contracttype.toString()}} </p>
                <p v-if="offer.contracttype == null"><i class="file code outline icon"></i>: _ </p>
              </sui-card-description>
            </sui-card-content>
            <div class="extra content">
              <div class="center aligned blue author">
                <div class="ui blue horizontal label" href="">En savoir plus</div>
              </div>
            </div>
          </sui-card>
        </sui-card-group>
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
      axios({method: "GET", mode: "cors", "useCredentails": true,"url":`${process.env.VUE_APP_DOMAIN_URL}/offers`}).then(res => {
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
