<template>
<div>
    {{text + ' ' + id}} id: {{id}}
<h1 v-bind:title="title">Заголовок сайта</h1>
<hr>
<!-- v-if="status==1"----важно else применять к следующему за if  тегу------- -->
<h2 v-if="status==1">Свойство истина равно 1</h2>
<h2 v-else-if="status==2">Свойство ложь равно 2</h2>
<h2 v-else>Свойство не то не се {{status}}</h2>
<hr>
<!-- --v-if="status==1"------- -->
<div v-if="status==1">
<h3>Заголовок правильный</h3>
<p>Текст правильный</p>
</div>

<div v-else>
<h3>Заголовок неправильный</h3>
<p>Текст неправильный</p>
</div>

<hr>
<!-- --v-show="status"-------display: none;	если status=0------------------ -->
<h3 v-show="status">Заголовок v-show</h3>


<!-- ------присваивается класс----active-----если класс с черточкой то в кавычках---можно иметь просто классы и классы с vue одновременно------------ -->

<div class="new" :class="{ active: isActive, 'btn-default':isBtn }">
isActive
</div>
<hr>
<!-- -тернарное условие. можно сделать отображение того или иного класса в зависимости от результатата условия -здесь соревнование идет между первой и второй запись. решает все isActive: true если false--выполняется второй класс----------default выполняется всегда-->
<div :class="[  isActive ? 'active btn'  : 'disabled a', 'default' ]">
isActive
</div>
<hr>
<!-- --:style----------------------------- -->
<h2 :style="{color: 'purple', width: width + 'px', background: '#F08080',margin: '20px auto'		}"> текст</h2>
<hr>
<!-- ---v-for="item in items"---------------------------- -->
<ul>
    <li
     v-for="item in items" :key="item.message"
     >
    {{ item.message }}
  </li>
</ul>
<hr>
<!-- --- v-for="(item, index) in items"---------------------------- -->
<ul>
   <li 
   v-for="(item, index) in items"
   :key="item.message"
   >
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<hr>
<!-- --  v-for="user in users"----------вывод списком------------------- -->
<ul>
  <li
  v-for="user in users"
  :key="user.message"
  >
{{user.id}} : {{user.name}}
  </li>
</ul>
<hr>
<!-- --  v-for="user in users"----------вывод таблицей------------------- -->
<table border="1">
  <thead>
    <th>
      iD
    </th>
    <th>
      Имя
    </th>
  </thead> 
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
	<!-- -v-text="text"-------выводит текст---------------------- -->
  <h1
  v-text="text"
  >
  </h1>
<hr>
<!-- ----------лучше использовать интерполяцию--------------------- -->
  <h5>
{{text}}
  </h5>
<hr>
<!-- --v-html="text"------здесь рендерится html внутри поля text/ если он есть---------------------- -->
<h4 v-html="text"></h4>
<hr>
<!-- -- v-model ---------------------------------->
<input type="text" v-model="mes">
<h2   :style="{color: 'purple',width: '30%', background: '#F08080',margin: '20px auto'		}">{{mes}}</h2> 
<hr>

<input type="checkbox" v-model="checked" >
<label for="checkbox" >{{checked}}</label>
<hr>
<!-- --v-pre---------- -->
<h1 v-pre>{{title}}{{пропускает компиляцию данного элемента и всех его потомков }}</h1>
<hr>



<!-- ===================================================== -->
<!-- -----------methods-------------------- -->

<!-- click -->
<div >
  <button 
  class="btn btn-dark"
  @click="counter1 += 1"
  >button</button>
  <p>Кнопка выше была нажата {{ counter1 }} раз</p>
</div>
<hr>
<!-- ---------поменяет по клику на кнопку значение свойства id у второго элемента массива users---------------------- -->
<div >
  <button 
  class="btn btn-warning"
  @click="users[1].id=20"
  >поменяет по клику на кнопку значение свойства id у второго элемента массива users</button>
</div>
<hr>
<!-- ------------------------------- -->
<div >
  <button 
  class="btn btn-primary"
  @click="nameFunction()"
  >По клику вызовет функцию</button>

</div>
<hr>
<!-- ------------------------------- -->
<button
@click="high"
class="btn btn-secondary"
>
Counter равен: {{counter}}
</button>
<hr>
<!-- ------------------------------- -->
  <div class="container">
    <h4>App</h4>
    <h2>{{count}}</h2>
  <div class="row justify-content-around"> 
    <button 
    class="btn btn-success"
    @click="countUp"
    >
      +1
    </button>

    <button 
    class=" btn btn-success"
    @click="countDown"
    >
      -1 
    </button>
  </div>	
</div>
<hr>
<!-- ----------очищает url от https://--------------------- -->
<div class="container">
  <h1>Url: <a :href="url">{{cleanUrl}} </a></h1>
  <input type="text" class="form-control" v-model="url">
  <button @click="cleanerUrl" class="btn btn-primary">Clean Url</button>
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
<hr>
<!-- ------------------------------- -->
</div>
	
</template>




<script>
export default {
name: 'Mycomponent',
data(){
  return{
  text:"Lorem ipsum dolor sit amet consectetur, <strong> elit. Asperiores nobis quo mollitia.</strong> Est ipsa totam natus deserunt adipisci. Doloremque <i>deleniti iste corrupti </i> praesentium error at officiis, eos iure voluptatem numquam!",
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
    ],   
    counter1: 0,
    counter: 1,
    hashtags:[],
    mes:"",
    checked: true,
    count: "0",
    url: "",
    cleanUrl: ""
}

},
methods:{
nameFunction(){alert('nameFunction')},
	high(){
  this.counter++;

},
countUp(){
  this.count +=1;
},
countDown(){
  this.count -=1;
},
cleanerUrl(){
  this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
}

	},
// хук жизненного цикла
created: function(){
  // this.counter = 3;
  this.high();
},


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

  label{
    margin: 0 0 0 10px;	
  }

  .btn{
    margin-top: 20px;
  }
</style>