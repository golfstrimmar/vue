<template lang="pug">
div
      .title-2
        h2 Для получения доступа к регистрации на турнир введите свой e-mail
      
      .row
        form.col.s12(@submit.prevent="registerUser")
          .row
            .input-field.col.s12
              input#email.validate(type='email'    v-model.trim="user.email"   autocomplete="off"  )
              label(for='email') Email
          
            .alert-warning(
              v-if=" $v.user.email.$dirty && !$v.user.email.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.
            //- .alert-warning(
            //-   v-if=" $v.form.username_1.$dirty && !$v.form.username_1.minLength && submit===false"
            //-   ) 
            //-   span.mdi.mdi-alert-octagram-outline
            //-   span  Ошибка! В email должно быть больше 3-х символов.
          
          .row
            .input-field.col.s12
              input#password.validate(type='password'   v-model.trim="user.password" autocomplete="off")
              label(for='password') Ваш пароль(минимум 6 символов)
          .row
            .input-field.col.s12
              input#password.validate(type='password'   v-model.trim="user.confirmPassword"  autocomplete="off")
              label(for='password') Повторите пароль
          //- .row
          //-   .input-field.col.s6
          //-     span.span-alert(v-if="error") Ошибка! Пароли не совпадают или вы забыли их ввести
          button.btn.waves-effect.waves-light(type='submit' name='action' ) Зарегистрироваться
</template>
  
<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: "signUp",
  data: () => ({
    user: {
      email: "",
      password: "",
      confirmPassword : "",
    },



    error: false,
    submit: false,
  }),
  components: {},
  mounted() {},
  methods: {
    registerUser() {
      if (
        this.user.password !== this.user.confirmPassword ||
        this.user.password.length < 6
      ) {
        this.error = true;
      } else {
       
                this.$v.user.$touch()
                if (this.$v.user.$dirty && this.$v.user.$invalid) {
                     return
                  }else{
                          console.log(user);
                  }
       
       const user = {
          email: this.user.email,
          password: this.user.password,
        };
        this.$store.dispatch('registerUser',  user )


        this.user.email ='',
        this.user.password ='',
        this.user.confirmPassword ='',
        this.$router.push("/Registration");
      }
    },
  },



validations: {
user: {
   email:{  required,
              minLength: minLength(3)
              
              },

    password: {  required,
              minLength: minLength(3)},

    confirmPassword: {  required,
              minLength: minLength(3)},
}
},









};
</script>

<style lang="sass">
.span-alert
    background: #FF3D00
    color: white
    padding: .5rem
    font-size: 1rem
    border-radius: .5rem
.alert-warning
  margin: 5rem 0 0 0
</style>
