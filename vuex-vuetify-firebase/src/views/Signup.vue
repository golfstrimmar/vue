<template lang="pug">
v-container(fluid='' fill-height='')
  v-layout(align-center='' justify-center='')
    v-flex(xs12='' sm8='' md6='')
      v-card.elevation-8
        v-toolbar(dark='' color='primary')
          v-toolbar-title Регистрация
          v-spacer
        //- v-col( cols=" 8")
          //- v-alert(dense  type='warning' elevation="8" :value = "value") {{error}}
        //- v-col( cols=" 8")
        //-   v-alert(  dense elevation="8"  type="success" :value = "success") Спасибо! Регистрация прошла успешно
        v-card-text
          v-form
            v-text-field(prepend-icon='mdi-account' name='login' label='Email' type='email' required v-model="email")
            v-text-field#password(prepend-icon='mdi-lock' name='password' label='Пароль' type='password'  required v-model="password")
        v-card-actions
          v-spacer
          //- v-btn(color='primary' @click.prevent="signup" :disabled="processing") Зарегестрироваться
          v-btn(color='primary' @click.prevent="signup") Зарегестрироваться
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    email: null,
    password: null,
    
  }),




  // computed: {
  //   error() {
  //     return this.$store.getters.getError;
      
  //   },
  //   processing() {
  //     return this.$store.getters.getProcessing;
  //   },
  //   isUserAutheticated() {
  //     return this.$store.getters.isAuthenticated;
  //   },
  //   value(){
  //     if(this.$store.getters.getError){
  //       return this.value = true
  //     }else{
  //       return this.value = false
  //     }
  //   }
  // },
  // watch: {
  //   isUserAutheticated(val){
  //     if (val === true) {
  //     this.$router.push("/")
  //     }
  //   }
  // },
  // props: {
  //   source: String,
  // },
  methods: {
    signup() {
      this.$store.dispatch("SIGNEUP", {
        email: this.email,
        password: this.password,
      });
    },
    signup() {
      const user ={
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('registerUser',  user)
    },
  },
};
</script>

<style>
.v-btn {
  padding: 13px !important;
}
</style>
