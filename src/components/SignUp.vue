<template>
  <div class="signup">
    <div class="column">
      <h3 class="ui center aligned header">Inscription</h3>
      <form class="ui form">
        <div class="ui segment">
          <div class="field">
            <label>Nom</label>
            <div class="two fields">
              <div class="field">
                <input type="text" name="first-name" placeholder="Prenom">
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
            <label>Nom</label>
            <div class="two fields">
              <div class="field">
                <input type="password" name="password" placeholder="Mot de passe">
              </div>
              <div class="field">
                <input type="password" name="password" placeholder="Confirmation du mot de passe">
              </div>
            </div>
          </div>

          <div class="ui center checkbox" style="margin: 1.5rem 25% 0 25%">
            <input type="checkbox" name="terms">
            <label>J'accepte les <a href=""> conditions d'utilisateurs</a>.</label>
          </div>
        </div>

        <div class="ui blue submit button" style="margin: 1.5rem 35% 0 35%">Connexion</div>

      </form>
    </div>
  </div>
</template>

<style>
  .signup{
    margin: 7rem 30% 0rem 30%;
  }

  a{
    color: #2f2a85;
  }
</style>
