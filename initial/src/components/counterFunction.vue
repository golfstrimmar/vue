<template>
  <div class="container">

    <h1 @click="counterFunction('ooo')" >{{message}}</h1>
  </div>
</template>
<script>
export default {
  props:{
    message:{
      type: String,
      required: true
    } ,
    // принимает функцию как параметр от родителя
    counterFunction: Function
  }
}
</script>
<style lang="css">
  
</style>