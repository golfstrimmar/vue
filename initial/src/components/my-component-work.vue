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
<hr>
<!-- -тернарное условие. можно сделать отображение того или иного класса в зависимости от результатата условия -здесь соревнование идет между первой и второй запись. решает все isActive: true если false--выполняется второй класс----------default выполняется всегда-->
<div :class="[  isActive ? 'active btn'  : 'disabled a', 'default' ]">
isActive
</div>
<hr>
<!-- ------------------------------- -->
<h2 :style="{color: 'purple', width: width + 'px', background: '#F08080',margin: '20px auto'		}"> текст</h2>
<hr>
<!-- ------------------------------- -->
<ul>
    <li
     v-for="item in items" :key="item.message"
     >
    {{ item.message }}
  </li>
</ul>
<hr>
<!-- ------------------------------- -->
<ul>
   <li 
   v-for="(item, index) in items"
   :key="item.message"
   >
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<hr>
<!-- ------------вывод списком------------------- -->
<ul>
  <li
  v-for="user in users"
  :key="user.message"
  >
{{user.id}} : {{user.name}}
  </li>
</ul>
<hr>
<!-- ------------вывод таблицей------------------- -->
<table border="1">
  <thread>
    <th>
      iD
    </th>
    <th>
      Имя
    </th>
  </thread>
  <tbody>
    <tr
     v-for="user in users"
  :key="user.message"
     >
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
    </tr>
  </tbody>
</table>
<hr>
<!-- -----------methods-------------------- -->
<!-- -----------methods-------------------- -->
<!-- -----------methods-------------------- -->

<!-- click -->
<div >
  <button 
  @click="counter += 1"
  >button</button>
  <p>Кнопка выше была нажата {{ counter }} раз</p>
</div>
<hr>
<!-- ---------поменяет по клику на кнопку значение свойства id у второго элемента массива users---------------------- -->
<div >
  <button 
  @click="users[1].id=20"
  >поменяет по клику на кнопку значение свойства id у второго элемента массива users</button>
</div>
<hr>
<!-- ------------------------------- -->
<div >
  <button 
  @click="nameFunction()"
  >По клику вызовет функцию</button>

</div>
<hr>
<!-- ------------------------------- -->
<hr>
<!-- ------------------------------- -->
<hr>
<!-- ------------------------------- -->
<hr>
<!-- ------------------------------- -->
<hr>
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
   status: 1,
   isActive: true,
   isBtn: true,
   width: 115,
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    parentMessage: 'Родитель',
    users: [
      {id:1, name: "Иван" },
      {id:2, name: "Марья" }
    ],    counter: 0
}

},
methods:{
nameFunction(){alert('nameFunction')}
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