<template lang="pug">
.row
  form.col.s12(@submit.prevent="registerUser")
    .row
      .input-field.col.s12
        input#email.validate(type='email'    v-model="user.email"   autocomplete="off"  )
        label(for='email') Email
    .row
      .input-field.col.s12
        input#password.validate(type='password'   v-model="user.password" autocomplete="off")
        label(for='password') Ваш пароль(минимум 6 символов)
    .row
      .input-field.col.s12
        input#password.validate(type='password'   v-model="user.confirmPassword"  autocomplete="off")
        label(for='password') Повторите пароль
    .row
      .input-field.col.s6
        span.span-alert(v-if="error") Ошибка! Пароли не совпадают или вы забыли их ввести
    button.btn.waves-effect.waves-light(type='submit' name='action') Зарегистрироваться



</template>


<script>
export default {
  name: "signUp",
  data: () => ({
    user: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    error: false,
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
        const user = {
          email: this.user.email,
          password: this.user.password,
        };
        this.$store.dispatch('registerUser',  user )
        this.$router.push("/signIn");
      }
    },
  },
  computed: {},
};
</script>

<style lang="sass">
.span-alert
    background: #FF3D00
    color: white
    padding: .5rem
    font-size: 1rem
    border-radius: .5rem
</style>

