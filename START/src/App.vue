<template lang="pug">
<!-- здесь  vuetify router vuex axios  -->

#app
  Navbar
  router-view
  Footer

</template>

<script>
import Navbar from './components/navbar';
import Footer from './components/footer';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
body 
  font-size: 10px
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  font-size: 1.5rem
  padding: 3rem 0
  
@import '~materialize-css/dist/css/materialize.min.css'

</style>