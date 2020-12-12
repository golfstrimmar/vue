<template lang="pug">
<!-- здесь  vuetify router vuex axios  -->

v-app
  Navbar
  MixinsVariablesSASS
  router-view
  
</template>

<script>
import Navbar from '@/components/navbar';
import MixinsVariablesSASS from '@/components/MixinsVariablesSASS';

export default {
  name: 'App',

  components: {
    Navbar,
    MixinsVariablesSASS
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
  color: #2c3e50



</style>