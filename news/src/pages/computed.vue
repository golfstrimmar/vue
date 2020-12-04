<template>
<b-row no-gutters class="justify-content-center ">
  <h1> computed </h1>
<div class="w-100 my-5"></div>
<button class="btn btn-secondary">btn-secondary</button>

</b-row>

</template>
  
<script>
export default {
  
  data() {
    return {
     c: 0,
      }
    },
 computed:  {
   messResult(){
   return this.c > 3 ? "больше 3" : "меньше 3"
  },
    },
  }
</script>
  
<style	lang="css" scoped>
  
</style>