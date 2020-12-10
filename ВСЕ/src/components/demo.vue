	
<template>
<!-- https://ru.vuejs.org/v2/guide/transitions.html -->

  <div>
    <div class="container">
<button class="btn btn-secondary" @click="show= !show">Toggle</button> 
<transition name="fade">
<p v-if="show">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, enim?
</p>
</transition>
<transition name="newanim">
<div class="box" v-if="show">

</div>
</transition>





    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  }
}
</script>

<style >
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .5s;
  }
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.box{
  width: 150px;
  height: 130px;
  background: burlywood;
}

  .newanim-enter-active{
animation: newanim-in .5s;
  }
  .newanim-leave-active{
    animation: newanim-in .5s reverse;
  }
@keyframes newanim-in{
0% {transform: scale(0)}
50% {transform: scale(1.2)}
100% {transform: scale(1)}
} 



</style>