<template>


<v-col cols="4">
  <v-card
  @click="openPhoto"
  >
    <v-card-title>{{photo.title}}</v-card-title>
    <v-card-text>
      <v-img
        width = "200"
        height= "200"
        :src="photo.url"
      />
    </v-card-text>
  </v-card>
<h1>Photo -{{photo.id}} </h1>
</v-col>
  
</template>

<script>
  export default {
    props: {
  photo: {
    type: Object,
    required: true,
  },
},
 data: () => ({   

   }),
   methods:{
     openPhoto(){
       this.$emit('openPhoto', this.photo)
     }
   }

  }
</script>

<style scoped>

</style>