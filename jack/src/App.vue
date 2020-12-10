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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>