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
                <input type="text" name="first-name" v-model="firstName" placeholder="Prénom">
              </div>
              <div class="field">
                <input type="text" name="last-name" v-model="lastName" placeholder="Nom">
              </div>
            </div>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" v-model="email" placeholder="Email">
          </div>
          <div class="field">
            <label>Mot de passe</label>
            <div class="two fields">
              <div class="field">
                <input type="password" name="password" v-model="password" placeholder="Mot de passe">
              </div>
              <div class="field">
                <input type="password" name="passwordConfirmation" v-model="confirmedPassword" placeholder="Confirmation du mot de passe">
              </div>
            </div>
          </div>
          <div class="ui center checkbox" style="margin: 1.5rem 25% 0 25%">
            <input type="checkbox" name="terms" id="terms" v-model="terms">
            <label>J'accepte les <router-link :to="{name: 'cgu'}"><i><u> conditions d'utilisateurs</u></i></router-link>. </label>
          </div>
        </div>
        <sui-button class="inscription" @click="handleSubmit">Inscription</sui-button>
      </form>
      <div v-if="message.length > 0" class="ui negative message">
        <i class="close icon"></i>
        <div class="header">
          Error:
        </div><p>{{message}}</p></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmedPassword:"",
        message: "",
        terms: false,
      }
    }, methods : {
      handleSubmit(e){
        e.preventDefault()
        console.log(`${this.firstName} ; ${this.lastName} ; ${this.email} ; ${this.password} ; ${this.confirmedPassword} ; ${this.$loggedIn}`);
        if(this.firstName === "" || this.lastName === "" || this.email === "" || this.password === "" || this.confirmedPassword === "") {
          this.message = "Veuillez remplir tous les champs.";
        } else if(this.password === this.confirmedPassword && this.password.length > 0) {
          console.log(`before axios`);
          axios.post(`${process.env.VUE_APP_DOMAIN_URL}/signup`, {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
          }).then( res => {
            console.log(`Registred account! ${res}`);
            this.$router.push({ name: 'signin' });
          }).catch(err => {
            console.log(`server error`);
            console.log(err);
          })
        } else if(this.terms === false){
          this.message =`Vous devez accepter les conditions d'utilisateur pour créer un compte.`
        } else if (this.password !== this.confirmedPassword) {
          this.password = ''
          this.confirmedPassword = ''
          this.message = "Mots de passe différents.";
        } else{
          this.firstName = ''
          this.lastName = ''
          this.email = ''
          this.password= ''
          this.confirmedPassword = ''
          this.message = "Il existe déjà un compte avec cette adresse email.";
        }
      }
    }
  }
</script>
