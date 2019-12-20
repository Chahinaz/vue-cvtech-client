<template>
  <div class="sticky menu">
    <div class="five wide column search">
      <h3 class="ui teal center header">Options de recherche</h3>
      <!-- dropbox on sectors -->
      <sui-dropdown placeholder="Secteur" selection :options="sectors" v-model="current"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchOpt',
    data() {
      return {
        current: null,
        sectors: [{
          text: 'Banque / Assurances / Finances',
          value: 0,
        }, {
          text: 'Associatif / Art / Culture',
          value: 1,
        }, {
          text: 'Informatique / Telecom / Internet',
          value: 2,
        }, {
          text: 'Santé / Protection Sociale',
          value: 3,
        }, {
          text: 'Services publics / Administrations',
          value: 4,
        }, {
          text: 'Restauration / Loisirs',
          value: 5,
        }]
      }
    }
  }
</script>
