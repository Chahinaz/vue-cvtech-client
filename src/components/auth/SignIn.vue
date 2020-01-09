<template>
  <body>
  <div class="login">
    <div class="column">
      <h3 class="ui center aligned header">Connexion à la CV-Tech</h3>

      <form class="ui large form">
        <div class="ui segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="Identifiant"/>
            </div>
          </div>

          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Mot de passe"/>
            </div>
          </div>

          <div class="field">
            <div class="ui checkbox" style="margin: 0.5rem 30% 0 30%">
              <input type="checkbox" name="example">
              <label>Rester connecté</label>
            </div>
          </div>
        </div>

        <div class="ui blue submit button" style="margin: 1.5rem 30% 0 30%">Connexion</div>
        <!-- <div class="ui error message"></div>
           do an error empty field
        </div> -->
      </form>
    </div>
  </div>
  </body>
</template>

<style>
  .login{
    margin: 7rem 37% 0rem 37%;
  }
</style>
