<template>
    <div class="container">
        <h1>Страница манипуляций с компонентами</h1>
        <hr> 
        заводится дочерний компонент  popup. и  по клику на кнопку------- visible = true. и это идет в дочерний компонент через  :visible="visible"
        <br>
<button
 class="btn btn-success my-3" 
 @click="visible = true "
 >
  <span class="icon-cool"></span>
  открыт попап?--- {{visible}}
</button>
<br>
родительский компонент принимает событие visibleChange от дочернего и здесь обрабатывает данные от дочерненего , то есть присваивает visible= $event
<br>
<!-- @visibleChange="visible= $event" 
 :visible="visible" -->

<!-- <popup>
здесь что-то будет
</popup>  -->
   
    </div>
</template>
  
<script>
// import popup from "popup"
export default {
data() {
  return {
     visible: false  ,
  }
},
// components:{
//   popup
// }
  }
</script>
  
<style	lang="css" scoped>
  
</style>