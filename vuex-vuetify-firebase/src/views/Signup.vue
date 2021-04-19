<template lang="pug">
v-container(fluid='' fill-height='')
  v-layout(align-center='' justify-center='')
    v-flex(xs12='' sm8='' md6='')
      v-card.elevation-8
        v-toolbar(
          dark='' 
          color='primary'
          )
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
        
        //- здесь выводится текст сообщения об ошибке, который приходит с firebase 
        v-alert(dense='' outlined='' type='error'
         :value="error"
          ) {{error}}
         
        v-card-actions
          v-spacer
          v-btn(color='primary' @click.prevent="signup" :disabled="processing") Зарегестрироваться
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    email: null,
    password: null,
    isAlertVisible : false
  }),



    
  computed: {
    // здесь из хранилища берется сосотояние ошибки
    error() {
      return this.$store.getters.getError;
    },
    // здесь при начале процесса нажатия на кнопку обрабатывается переменная getProcessing
    processing() {
      return this.$store.getters.getProcessing;
    },
    // берем из хранилища состояние аутентификации. если true то см. watch
    isUserAutheticated() {
      return this.$store.getters.isAuthenticated;
    },
  //   value(){
  //     if(this.$store.getters.getError){
  //       return this.value = true
  //     }else{
  //       return this.value = false
  //     }
  //   }
  // },

  watch: {
    // после успешной аутентификации перебрасываем на другую страницу
    isUserAutheticated(val){
      if (val === true) {
      // setTimeout(() => this.$router.push("/signIn"), 3000)
      this.$router.push("/signIn")
      }
    }
  },
  // props: {
  //   source: String,
  },
  methods: {
    signup() {
      const user = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch("SIGNEUP", user);
    },
  },
};
</script>

<style lang="sass">
.v-btn 
  padding: 13px !important
.v-alert

  // padding: 1rem
  // color: red
  // // font-size: 1rem
  // border: .1rem solid red
  margin: 0 1rem
  // border-radius: .4rem
  // background: #EF9A9A
</style>
