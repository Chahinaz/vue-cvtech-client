<template>
  <div class="page">
    <div class="column">
      <h3 class="ui blue center aligned header">Connexion à la CV-Tech</h3>
      <form class="ui form">
        <div class="ui segment">
          <div class="field">
            <label>Email</label>
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="Identifiant"/>
            </div>
          </div>
          <div class="field">
            <label>Mot de passe</label>
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Mot de passe"/>
            </div>
          </div>
          <div class="field">
            <sui-checkbox class="stay_in"> Rester connecté </sui-checkbox>
          </div>
        </div>
        <sui-button class="connection">Connexion</sui-button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .stay_in{
    margin: 0.5em 33% .5em 33% !important;
  }
</style>
