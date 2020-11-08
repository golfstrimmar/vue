<template>
<div>
    {{text + ' ' + id}} id: {{id}}
<h1 v-bind:title="title">Заголовок сайта</h1>
<hr>
<!-- ----важно else применять к следующему за if  тегу------- -->
<h2 v-if="status==1">Свойство истина равно 1</h2>
<h2 v-else-if="status==2">Свойство ложь равно 2</h2>
<h2 v-else>Свойство не то не се {{status}}</h2>
<hr>
<!-- --------- -->
<div v-if="status==1">
<h3>Заголовок правильный</h3>
<p>Текст правильный</p>
</div>

<div v-else>
<h3>Заголовок неправильный</h3>
<p>Текст неправильный</p>
</div>

<hr>
<!-- ---------display: none;	если status=0------------------ -->
<h3 v-show="status">Заголовок v-show</h3>


<!-- ------присваивается класс----active-----если класс с черточкой то в кавычках---можно иметь просто классы и классы с vue одновременно------------ -->

<div class="new" v-bind:class="{ active: isActive, 'btn-default':isBtn }">
isActive
</div>


<!-- ------------------------------- -->
</div>

</template>




<script>
export default {
name: 'Mycomponent',
data(){
  return{
  text:"Helloo!!!",
   id: 10,
   title: "заголовок",
   status: 0,
   isActive: true,
   isBtn: true
}
}
}
</script>

<style >
  .active{
    background: deepskyblue;
color: darksalmon;
  }
  .btn-default{
    border: 5px solid blue;

  }
</style>