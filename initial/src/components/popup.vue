<template>
  <transition name="fade1">
  <div id="popup1" v-if="visible" >
    <div class="popup1-overlay" @click="visibleChange()"></div>
    <div class="popup1-center" >
      {{visible}}
      <span class="icon-cross" @click="visibleChange()"></span>
    </div>  
  </div>
</transition>

</template>

<script>
export default {
  // принимаются переменные из родительского компонента.
  props:[
 'visible'
  ]
   
  
,
data(){
  return{
  }
},

methods:{
  // функция поднимает наверх в родительский компонент событие visibleChange и передает данные , которые должны быть изменены в родительском компоненте
visibleChange(){
  this.$emit('visibleChange', false)
}
  }
}
</script>

<style>
#popup1{
position: fixed;
width: 100vw;
height: 100vh;
z-index: 1000;
}
.popup1-overlay{
  position: fixed;
  width: 100vw;
height: 100vh;
  top: 0%;
  left: 0%;
  background-color: rgba(0,0,0,.8);
}
.popup1-center{
  position: fixed;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-cross{
position: absolute;
width: 12px;
height: 12px;
top: 10px;
right: 10px;
font-size: 12px;
opacity: .5;
}
.icon-cross:hover{
  cursor: pointer;
  color: blue;
  transition: all .3s ;
  transform: scale(1.2);
}
.fade1-enter-active, .fade1-leave-active {
  transition: opacity .3s;
}
.fade1-enter, .fade1-leave-to  {
  opacity: 0;
}
</style>