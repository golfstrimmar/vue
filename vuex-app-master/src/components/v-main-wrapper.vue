<template>
  <div class='v-main-wrapper'>
    <v-header
    
    />
    <v-content
    @btnClicked="btnClicked"
    ></v-content>
  </div>
</template>

<script>
  import vContent from './page/v-content'
  import vHeader from './page/v-header'

  export default {
    name: "v-main-wrapper",
    components: {
      vContent,
      vHeader
    },

data(){
  return{
   
  }

},
// ------------------------------------------------
methods: {

}


  }
</script>

<style scoped>

</style>