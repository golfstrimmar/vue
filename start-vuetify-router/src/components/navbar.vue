<template>
    <v-container fluid>
    <v-app-bar
        color="indigo accent-2"
        dark
      >
      <v-spacer></v-spacer>

<router-link to="/">
<v-btn  outlined class="ml-3">Home</v-btn>
</router-link>
<router-link to="/about">
<v-btn  outlined class="ml-3">About</v-btn>
</router-link>
<router-link to="/MainPage">
<v-btn  outlined class="ml-3">MainPage</v-btn>
</router-link>
<router-link to="/PhotosPage">
<v-btn  outlined class="ml-3">PhotosPage</v-btn>
</router-link>

      </v-app-bar>

 </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>