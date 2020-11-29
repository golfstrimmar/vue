<template>
    <div class="container">
        <h1>Страница анимаций</h1>
        <hr>  

 <transition name="slide-fade">
<form
 v-if="showForm"
 >

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
     type="email" 
     class="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp" 
     placeholder="Enter email"
     v-model="exampleInputEmail1"
     >
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
</transition>



<br>
<button
 class="btn btn-secondary" 
 @click="showForm=!showForm "
 >
 {{showTextForm}}
 </button>

<hr>
</div>
</template>
  
<script>
export default {
data(){
  return{
    showForm: true,
    exampleInputEmail1:""
  }
},
 computed: {
  showTextForm(){
    return this.showForm ? "Скрыть форму" : "Показать форму"
  }
  }
  }
</script>
  
<style	lang="css" scoped>
   .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>