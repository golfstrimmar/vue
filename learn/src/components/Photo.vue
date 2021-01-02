<template lang="pug">
.container
  .row 
    v-card(
      @click="openPhoto"
    )
      v-card-title  {{photo.title}}
      v-card-text  {{photo.text}}
</template>
  
<script>
export default {
  
 props: {
      photo: {
        type: Object,
        required: true
      }
    },

methods:{
  openPhoto(){
    this.$emit('openPhoto', this.photo)
  }
}




    }
</script>
  
<style	lang="sass" scoped>
  
</style>