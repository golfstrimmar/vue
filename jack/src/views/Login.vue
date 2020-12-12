<template lang="pug">
v-container

  v-row.auth
    v-col.auth__bunner(cols="12"   sm="6") 
      h2 bunner
    
    v-col.auth__form(cols="12"   sm="6") 
      h2 Login
      v-form.mb-4(ref='form' @submit.prevent="submit")
        .form__item(
          :class="{ 'errorInput': $v.email.$error }"
          )
          v-text-field(
            v-model='email' 
            type="email" 
            label='E-mail' 
            required
            :class="{ 'error': $v.email.$error  }"
            @change="$v.email.$touch()"
            )
          .error.Emailerror(v-if="!$v.email.required") Field is required
          .error.Emailerror(v-if="!$v.email.email")
            v-icon(color="red" small left) mdi-alert-outline
            |Email is not correct
        .form__item(
          :class="{ 'errorInput': $v.password.$error }"
          )
          v-text-field(
            v-model='password'   label='Password' required
            type="password" 
            :class="{ 'error': $v.password.$error  }"
            @change="$v.password.$touch()"
            )
          .error.Emailerror(v-if="!$v.password.required")
            v-icon(color="red" small left) mdi-alert-outline
            |Password is required.
          .error.Emailerror(v-if="!$v.password.minLength")
            v-icon(color="red" small left) mdi-alert-outline
            | Password must have at least {{ $v.password.$params.minLength.min }} letters.
     
        .form__item
          p.typo__p(v-if="submitStatus === 'OK'" ) Thanks for your submission!
          p.typo__p.typo__p_y(v-if="submitStatus === 'ERROR'" ) Please fill the form correctly.
          p.typo__p.typo__p_y(v-if="submitStatus === 'PENDING'" ) Sending...
        v-btn.pa-3(elevation="10" rounded color='primary' dark type="submit" :disabled="submitStatus === 'PENDING'")
          | Login
        v-card.pa-3.mt-8(tile max-width="400" elevation="5")
          span Need registration?
            router-link.pl-3(to="/registration") Create an registration


</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    email: "",
    password: "",
    submitStatus: null
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      // password,
      minLength: minLength(6)
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user ={
          email: this.email,
          password: this.password
        }
        console.log('login!')
        console.log(user)
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
};
</script>

<style lang="sass" scoped >

.form__item
  .typo__p
    background-color: lighten(#00E676, 40%)
    color: #00E676
    padding: 10px
    border-radius: 4px
    &_y
      background-color: lighten(#FF9800, 40%)
      color: #FF9800

  .error
    background-color: transparent !important
    display: none
  &.errorInput
    .error
      display: block !important
      &.Emailerror
        $color_success: red
        margin: -17px 0 0 0
        padding: 0 0 0 10px
        border-radius: 4px
        color: lighten($color_success, 10%)
        background-color: lighten($color_success, 40%)  !important

</style>

