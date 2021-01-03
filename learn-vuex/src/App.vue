<template lang="pug">
<!-- здесь  vuetify router vuex axios  -->

v-app
  
  Navbar
  router-view

</template>

<script>
import Navbar from './components/navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50


#nav 
  padding: 30px

  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
  
  

</style>