<template>
  <div class="page">
    <div class="column">
      <h3 class="ui blue center aligned header">Inscription</h3>
      <form class="ui form">
        <div class="ui segment">
          <div class="field">
            <label>Prénom & Nom</label>
            <div class="two fields">
              <div class="field">
                <input type="text" name="first-name" placeholder="Prénom">
              </div>
              <div class="field">
                <input type="text" name="last-name" placeholder="Nom">
              </div>
            </div>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email">
          </div>
          <div class="field">
            <label>Mot de passe</label>
            <div class="two fields">
              <div class="field">
                <input type="password" name="password" placeholder="Mot de passe">
              </div>
              <div class="field">
                <input type="password" name="passwordConfirmation" placeholder="Confirmation du mot de passe">
              </div>
            </div>
          </div>
          <div class="ui center checkbox" style="margin: 1.5rem 25% 0 25%">
            <input type="checkbox" name="terms">
            <label>J'accepte les <router-link :to="{name: 'cgu'}"><i><u> conditions d'utilisateurs</u></i></router-link>. </label>
          </div>
        </div>
        <sui-button class="inscription">Inscription</sui-button>
      </form>
    </div>
  </div>
</template>
