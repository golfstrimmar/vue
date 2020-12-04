<template>
  <div class='v-content'>
    <v-catalog
        @btnClicked="btnClicked"
    ></v-catalog>
  </div>
</template>

<script>
  import vCatalog from '../catalog/v-catalog'

  export default {
    name: "v-content",
    components: {
      vCatalog
    },
    data() {
      return {}
    },
    // ------------
      methods: {
      btnClicked(){
        this.$emit('btnClicked')  
      }
    }
  }
</script>

<style scoped>

</style>