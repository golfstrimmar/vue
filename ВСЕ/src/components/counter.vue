<template>
   <div class="container">
    <h1>{{message}}</h1> 
    <h2>{{count}}</h2>
  <div class="row "> 
    <button class="btn btn-success" @click="countUp()">увеличит на 1</button>
    <button class=" btn btn-success ml-2" @click="countDown()">уменьшит на 1</button>
  </div>	
</div>
</template>

<script>
export default {
  props:{
    message:{
      type: String,
      default: 'default text',
      required: true
    } 
  },
  data() {
    return {
       count: "0",
    }
  },
  methods: {
countUp(){this.count ++;},
countDown(){this.count --;},
  },

}
</script>

<style>

</style>