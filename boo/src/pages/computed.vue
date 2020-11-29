<template>
    <div class="container">
  <h1>Cвойства computed </h1>
<!-- ------------------------------- -->
отличается от methods тем, что вычисляется только при обращении
<br>
<h2 >просто счетчик {{c}}</h2>
<h3>{{messResult}}</h3>
<button class="btn btn-secondary" @click="c ++">+1</button>
<button class="btn btn-secondary ml-2" @click=" c --">-1</button>
<hr>
<!-- ------------------------------- -->

    </div>
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