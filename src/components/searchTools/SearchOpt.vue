<template>
  <div class="sticky menu">
    <h3 class="ui teal center header">Options de recherche</h3>
    <div class="five wide column">
      <!-- search values on sectors -->
      <sui-dropdown placeholder="Secteurs" selection :options="sectors" v-model="currentSector"/>
      <sui-dropdown placeholder="Contrats" selection :options="contractType" v-model="currentContractType"/>
      <sui-dropdown multiple placeholder="Compétances" selection :options="skills" v-model="currentSkills"/>
      <sui-dropdown placeholder="Langue" selection :options="language" v-model="currentLanguage"/>
      <sui-checkbox label="Handicape" :options="handicap" v-model="valueHandicap"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchOpt',
    data() {
      return {
        currentSector: null,
        currentContractType: null,
        currentLanguage: null,
        currentSkills: [],
        valueHandicap: false,
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
        }],
        contractType: [{
          text: "CDD",
          value: 0,
        }, {
          text: "CDI",
          value: 1,
        }, {
          text: "Stage",
          value: 2,
        }, {
          text: "Alternance",
          value: 3,
        }, {
          text: "Interim",
          value: 4,
        }],
        skill: [{
          text: "",
          value: 0,
      }],
        language: [{
          text: "Anglais",
          value: 0,
        }, {
          text: "Allemand",
          value: 1,
        }, {
          text: "Russe",
          value: 2,
        }, {
          text: "Chinois",
          value: 3,
        }, {
          text: "Japonais",
          value: 4,
        }],
        handicap : [{
          value: 0,
        }, {
          value: 1,
        }]
      }
    }
  }
</script>

<style scoped>
</style>
