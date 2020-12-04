



<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Введите e-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          required
          placeholder="Пароль"
        ></b-form-input>
      </b-form-group>

      <b-button
       type="submit" 
       variant="primary"
      @click.prevent="signUp"
      >Submit</b-button>

      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   
  </div>




</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form. password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      signUp(){
        this.$store.dispatch('signUp',{email: this.email, password: this.password})
      }
    }
  }
</script>


  
<style	lang="css" scoped>
  
</style>