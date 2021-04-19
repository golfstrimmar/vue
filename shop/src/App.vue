<template lang="pug">

#app
  VMainWrapper
</template>

<script>
import VMainWrapper from '@/views/v-main-wrapper'
export default {
  name: 'App',
  components: {
VMainWrapper,
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