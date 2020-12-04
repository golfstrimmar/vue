<template>
  <div class='v-main-wrapper'>
    <v-header
    :isDropdownVisible="isDropdownVisible"
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
    isDropdownVisible: false
  }

},
// ------------------------------------------------
methods: {
btnClicked(){
        this.isDropdownVisible=true
      }
}


  }
</script>

<style scoped>

</style>