<template>
<div>
    {{text + ' ' + id}} id: {{id}}
<h1 v-bind:title="title">Заголовок сайта</h1>
<hr>


<!-- :class= -->
<div class="devider-title"> :class=</div>
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

<!-- :style= -->
<div class="devider-title"> :style=</div>

<!-- --:style----------------------------- -->
<h2 :style="{color: 'purple', width: width + 'px', background: '#F08080',margin: '20px auto'		}"> текст</h2>
<hr>



<!-- v-for  -->
<!-- --- v-for="(item, index) in items"---------------------------- -->
 <div class="devider-title"> v-for  </div> 
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
  <thead >
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
<!-- -11----v-for-------------------------- -->

<div class="container">
  <ul>
    <li v-for="(cat,index) in cats" :key="cat.index">{{index+1}}&nbsp; {{cat}}</li>
  </ul>
</div>
<hr>
<div class="container">
  <ul>
    <li v-for="cat in catsObj" :key="cat">{{cat.id}}&nbsp; {{cat.name}}/{{cat.age}}</li> 
  </ul>
</div>

<!-- end  v-for end-->
<!-- ================================================== -->

<div class="devider-title"> v-text</div> 
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


<!-- v-html v-html v-html v-html v-html v-html v-html v-html v-html -->

<div class="devider-title"> <div class="devider-title"> v-html  </div>  </div> 
<!-- --v-html="text"------здесь рендерится html внутри поля text/ если он есть---------------------- -->
<h4 v-html="text"></h4>
<hr>

<!-- end v-html end -->



<!-- -- v-model ------v-model.lazy---------------------------->
<div class="devider-title">v-model</div>
<input type="text" v-model="mes">
<h2   :style="{color: 'purple',width: '30%', background: '#F08080',margin: '20px auto'		}">{{mes}}</h2> 
<hr>

<input type="checkbox" v-model="checked" >
<label for="checkbox" >{{checked}}</label>

<div class="container">
  <h2>{{myInput}}</h2>
  <div class="form-group">
      <input type="text" id="text" class="form-control" v-model.lazy="myInput">
      <label for="text">text</label>
  </div>
</div>


<hr>

<div class="devider-title">v-pre</div>

<!-- --v-pre---------- -->
<h1 v-pre>{{title}}{{пропускает компиляцию данного элемента и всех его потомков }}</h1>
<hr>


<!-- v-if v-else-if  v-else -->
<div class="devider-title">v-if v-else-if  v-else</div>

<!-- -10 ----показывает блок когда свойство --msgShow === 'primary'---------------------- -->
<!--конструкция  v-if v-else-if  v-else  --обеспечивает отсутствие в дом дереве блоков, которые не выбраны   -->
<div class="container mt-4">
  <div class="col-sm-6" v-if="msgShow === 'primary'">
    <div class="alert alert-primary" >
      {{msgPrimary}}
    </div>
  </div>
    <div class="alert alert-success" role="alert" v-else-if="msgShow === 'success'">
  <div class="col-sm-6" >
      {{msgSuccess}}
    </div>
  </div>
  <div class="col-sm-6"  v-else>
    <div class="alert alert-danger" role="alert" >
      {{msgDanger}}
    </div>
  </div>
</div>

	
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

<div class="devider-title">v-show</div>
<!-- -10 ---v-show -работает так же но в коде есть все блоки--style display: none;------------------------ -->
<div class="container mt-4">
  <div class="col-sm-6" v-show="msgShow === 'primary'">
    <div class="alert alert-primary" >
      {{msgPrimary}}
    </div>
  </div>
    <div class="alert alert-success" role="alert" v-show="msgShow === 'success'">
  <div class="col-sm-6" >
      {{msgSuccess}}
    </div>
  </div>
  <div class="col-sm-6"  v-show="msgShow === 'danger'">
    <div class="alert alert-danger" role="alert" >
      {{msgDanger}}
    </div>
  </div>
</div>
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
// --11-----------------
cats:['барсик','барсик','мася'],
catsObj:[
  {

    id: 1,
    name:'барсик',
    age: 5
  },
  {
    id: 2,
    name:'мишка',
    age: 4
  },
  {
    id: 3,
    name:'мася',
    age: 6
  },
],
    // --10-------------------------------
    msgPrimary: "Привет! Это главный текст сообщения",
    msgSuccess: "Действие успешно выполнено!",
    msgDanger: "Ошибка",
    msgShow:"danger",
    // -----------------------------------
    myInput: "",
    sizeToggle:false,
    isRounded:false,
    disabled:false,
    fontColor:'#ccc',
    backgroundColor:"yellow",
  message: "Hello, world!!!", 
  msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit!	", 
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
    hashtags:[],
    mes:"",
    checked: true,
    count: "0",
    url: "",
    cleanUrl: ""
}

}



}

</script>

<style scoped>

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