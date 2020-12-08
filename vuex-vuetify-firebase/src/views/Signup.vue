<template lang="pug">
v-container(fluid='' fill-height='')
  v-layout(align-center='' justify-center='')
    v-flex(xs12='' sm8='' md4='')
      v-card.elevation-8
        v-toolbar(dark='' color='primary')
          v-toolbar-title Регистрация
          v-spacer
          v-tooltip(right='')
            template(v-slot:activator='{ on }')
              v-btn(icon='' large='' href='https://codepen.io/johnjleider/pen/wyYVVj' target='_blank' v-on='on')
                v-icon(large='') mdi-codepen
            span Codepen
        v-card-text
          v-form
            v-text-field(prepend-icon='mdi-account' name='login' label='Email' type='email' required )
            v-text-field#password(prepend-icon='mdi-lock' name='password' label='Пароль' type='password'  required)
        v-card-actions
          v-spacer
          v-btn(color='primary') Зарегестрироваться
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      email: "",
      password: ""
    }),
    props: {
      source: String
    }
  }
</script>

<style >
.v-btn{
  padding: 13px!important;	
}
</style>