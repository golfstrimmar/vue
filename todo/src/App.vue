<template lang="pug">

#app
  Navbar
  router-view

</template>
<script>

import Navbar from '@/components/navbar'

export default {
  name: 'App',
 data: () => ({

   }), 
    components: {  

Navbar
      },
        mounted() {  

         },
           methods: { 

              },
                computed:{   

                 }

};
</script>

<style lang="sass">
html
  padding: 2rem 0 0 0	
  margin: 0 0 0 0
body
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  font-size: 10px
#app 
  font-size: 1.4rem
  padding: 0 2rem	

@import '~materialize-css/dist/css/materialize.min.css'

</style>