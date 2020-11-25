<template>
  <div class="container">
    <!-- @submit.prevent  ---предотвращает отпрвку  формы -->
<form @submit.prevent="">
  <div class="form-group">
    <label for="exampleInputEmail1">Email Adress</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleInputCheck1">
    <label for="exampleInputCheck1">Check me out</label>
  </div>
  <button type="Submit" class="btn btn-primary">Submit</button>
</form>
 <h2 @mousemove="HandlerMuseMove" class="mt-2">При наведении на это заголовок ниже можно увидеть координаты курсора
  <span class="prevent-span " @mousemove.stop="">
    при наведении на этот спан предотвращается событие считывания координат. хотя этот спан входит в состав заголовка
  </span>
   </h2>   
 <h2 class="mt-2">x:{{ x }}, y:{{ y }}</h2>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      x: 0,y:0
    }
  },
  methods:{
HandlerMuseMove(event){
this.x = event.clientX
this.y = event.clientY
}
}
}

</script>

<style lang="css">
  .prevent-span {
background: saddlebrown;
  }
</style>