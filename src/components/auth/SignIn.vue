<template>
  <div class="page">
    <div class="column">
      <h3 class="ui blue center aligned header">Connexion à la CV-Tech</h3>
      <form class="ui form">
        <div class="ui segment">
          <div class="field">
            <label for="email">Email</label>
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input id="email" type="email" name="email" v-model="email" placeholder="Identifiant"/>
            </div>
          </div>
          <div class="field">
            <label for="password">Mot de passe</label>
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input id="password" type="password" name="password" v-model="password" placeholder="Mot de passe"/>
            </div>
          </div>
          <div class="field">
            <sui-checkbox class="stay_in"> Rester connecté </sui-checkbox>
          </div>
        </div>
        <sui-button class="connection" type="submit" @click="handleSubmit">Connexion</sui-button>
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
    name: 'SignIn',
    data() {
      return {
        email:"",
        password:"",
        message: ""
      }
    },
    methods:{
      handleSubmit(e){
        e.preventDefault();
        if(this.password.length > 0){
          axios.post(`${process.env.VUE_APP_DOMAIN_URL}/signin`, {
            email: this.email,
            password: this.password
          }).then(res => {
            this.message = res.data.message;
            localStorage.setItem('profile', JSON.stringify(res.data));
            localStorage.setItem('jwt', res.data.token);
            if(localStorage.getItem('jwt') != null){
              this.$loggedIn = true;
              this.$nextTick(function() {
                this.$el.textContent;
              })
              this.$router.push('/');
            }
            this.$router.go();
          }).catch(err => {
            localStorage.removeItem('jwt');
            console.log(err.response);
          })
        } else {
          return alert(`Invalid email or password.`);
        }
      }
    }
  }
</script>

<style scoped>
  .stay_in{
    margin: 0.5em 33% .5em 33% !important;
  }
</style>
