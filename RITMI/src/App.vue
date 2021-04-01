
<template lang="pug">
#app 
  component(:is="layout")
    router-view
</template>

<script>
import RegLayout from '@/layouts/RegLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'App',
  data: () => ({  }),
    components: {
      RegLayout,
      MainLayout  
      },
  //     mounted() {     },  methods: {      }, 
   computed:{ 
     layout(){
       console.log(this.$route.meta)
       return (this.$route.meta.layout || 'main')+ '-layout'  
     }
       }
};
</script>

<style lang="sass">
@import '~materialize-css/dist/css/materialize.min.css'
@import 'assets/index.css'
@import 'assets/app.css'
</style>







