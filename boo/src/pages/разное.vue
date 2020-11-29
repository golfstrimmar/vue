<template>
    <div class="container">
<h1>Разное</h1>
<!-- ----------------------------------------------------------- -->
<!-- refs -->
<hr>
<h2 ref="h2">{{msg}}</h2>
<p ref="teext">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat, possimus reprehenderit alias, pariatur aperiam sunt exercitationem repellendus enim nemo optio ex doloribus expedita deserunt iste nobis neque facilis? Quas.
  </p>
<button
 @click="changeH2()"
  class="btn btn-primary"
  >$refs позволяет напрямую управлять элементом дом
  </button>
<!-- ----------------------------------------------------------------- -->
<hr>
уничтожение приложения
<br>
ничего не будет работать
<br>
  <button
   class="btn btn-danger" 
   @click="$destroy() "
   >
    <span class="icon-warning"></span>
    !!!убить приложение!!!
    <span class="icon-notification"></span>
    </button>

<hr>

<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------- -->

    </div>
</template>
  
<script>
export default {
 
  data() {
    return {
      msg:"$refs",
      }
    },
  methods: {
    // $refs позволяет напрямую управлять элементом дом
changeH2(){
this.$refs.h2.innerText="Привет!"
this.$refs.teext.style.color="red"
},



    },
  }
</script>
  
<style	lang="css" scoped>
  
</style>