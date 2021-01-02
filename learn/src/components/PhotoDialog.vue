<template lang="pug">
v-dialog(
  v-model='dialogVisible' 
  persistent='' 
  max-width='600'
  )
  v-card
    v-card-title {{photo.title}}
      v-card-text {{photo.text}}
</template>
  
<script>
export default {
  props: {
   photo: {
      type: Object,
      required: true
      },
      dialogVisible:{
        type: Boolean,
        default: false
      }
    },
    }
</script>
  
<style	lang="sass" scoped>
  
</style>