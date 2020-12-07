<template>
   <v-dialog
      v-model="dialog"
      persistent
      max-width="600"
    >
    <v-card>
      <v-card-title
      
      >
{{photo.title}}
      </v-card-title>

<v-card-text>
      <v-img
:src="photo.url">
      </v-img>
</v-card-text>


    </v-card>
    </v-dialog>
    
</template>

<script>
  export default {
    props:{
      photo: {
        type: Object,
        required: true
      },
      dialog:{
        type: Boolean,
        default: false
      }
    },
    data: () => ({  
      // dialog: false
     })
  }
  
</script>

<style scoped>

</style>


 