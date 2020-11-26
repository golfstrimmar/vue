<template>

  <div class="container">





	<div class="devider-title"> click</div> 
<!-- click -->
<div >
  <button class="btn btn-dark" @click="counter1 += 1" >button</button>
  <p>Кнопка выше была нажата {{ counter1 }} раз</p>
</div>
<hr>
<!-- -----добавляет случайное сичло---------- -->
добавляет случайное число
<br>
<button class="btn btn-danger" @click="numbers.push(Math.random())">
Add number 
</button>

<ul>
  <li v-for="number in numbers" :key="number"	>
    {{number}}
  </li>
</ul>


<hr>		
<!-- ---по нажатию на кнопку добавляется рандомное число в диапазоне от -5 до 5 и все элементы массива суммируются------------ -->
по нажатию на кнопку добавляется рандомное число в диапазоне от -5 до 5 и все элементы массива суммируются
<br>
<button class="btn btn-danger"
@click="addnumbers"
>
Add number 
</button>
<h3>Your count: {{sum}}</h3>
<ul>
  <li v-for="number in numbers" :key="number"	 >
    {{number}}
  </li>
</ul>
<hr>		
<!-- ----- переключает появление заголовка------------ -->
переключает появление заголовка<br>
btnTexts вычисляется при помощи computed: { <br>
btnTexts(){
  return  this.showh2 ? 'Hide result' : 'Show result';
}<br>
}<br>
<button class="btn btn-success" @click="showh2=!showh2">{{btnTexts}}</button> 
<h2 v-show="showh2">
  hello!!!
</h2>
<hr> 
<!-- ---------поменяет по клику на кнопку значение свойства id у второго элемента массива users---------------------- -->
поменяет по клику на кнопку значение свойства id у второго элемента массива users<br>
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

простой счетчик по клику<br>
<button
@click="high()"
class="btn btn-secondary"
>
Counter равен: {{counter}}
</button>
<hr>
<!-- ------------------------------- -->
счетчик увеличивает и уменьшает на 1
<br>
  <div class="container">
    <h2>{{count}}</h2>
  <div class="row "> 
    <button class="btn btn-success" @click="countUp()">увеличит на 1</button>
    <button class=" btn btn-success ml-2" @click="countDown()">уменьшит на 1</button>
  </div>	
</div>
<hr>
<!-- ----------очищает url от https://--------------------- -->
очищает url от https://<br>
<div class="container">
  <h1>Url: <a :href="url">{{cleanUrl}} </a></h1>
  <input type="text" class="form-control" v-model="url">
  <button @click="cleanerUrl" class="btn btn-primary">Clean Url</button>
</div>  
<hr>


<!-- ------------------------------- -->
счетчик <br>
<h2 >{{co}}</h2> 
<button class="btn btn-outline-success mb-2" @click="coIncrement(15)" type="button">+15</button>
<button class="btn btn-outline-success mb-2 ml-2 " @click="coReset()" type="button">Reset</button>
<button class="btn btn-outline-success mb-2 ml-2" @click="coDecrement()" type="button">-1</button> 

<hr>
<!-- ------------------------------- -->
вчисляемое свойство computed<br>
<h2 >{{c}}</h2>
<h3>{{messResult}}</h3>
<button class="btn btn-secondary" @click="c ++">+1</button>
<button class="btn btn-secondary ml-2" @click=" c --">-1</button>
<hr>
<!-- ------------------------------- -->
  <h1 @click="tutorialDemo">счетчик:{{coun}}</h1>
  <!-- если typeJob == 'list'  то присваивается класс 'border-primary' --иначе 'border-danger' -->
       <form class="border m-2 p-4" :class="typeJob == 'list' ? 'border-primary' : 'border-danger'">
        <div class="form-row">

            <div class="form-group col-12">
          <!-- :checked="typeJob == 'list'" ---будет выдавать  typeJob == 'list' -->
              <input type="radio" name="type" v-model="typeJob" value="list" :checked="typeJob == 'list'"> Список каналов
<!-- :checked="typeJob == 'search'" ---будет выдавать  typeJob == 'list' -->
              <input type="radio" name="type" v-model="typeJob" value="search" :checked="typeJob == 'search'"> Поиск
            </div>
          

          <!-- появляется если typeJob=='search' -->
          <div class="form-group col-12" v-if="typeJob=='search'">
            <label class="mr-3 ml-0"> Поиск {{search}}</label> 
            <!-- подсчитывает количество символов в тексте поиска -->
            <label v-if="search.length"> количество символов  {{search.length}}</label> 
          </div>

          <!-- появляется если typeJob=='search' -->
          <div class="form-group col-12" v-if="typeJob=='search'">
            <input type="text" class="form-group col-12" name="search" v-model="search" placeholder="Введите искомое значение">
          </div>

         
        </div><!-- form-row -->
      </form>
      <a href="#" @click="tutorialDemo">Нажми меня</a>
      <!-- {{ typeJob }}  -->
  <label for="" title="getDate">Проверка времени</label>



	<div class="devider-title"> ref</div> 
<!-- refs -->
 <div class="conttainer">
<h2 ref="h2">{{msg}}</h2>
<p ref="teext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat, possimus reprehenderit alias, pariatur aperiam sunt exercitationem repellendus enim nemo optio ex doloribus expedita deserunt iste nobis neque facilis? Quas.</p>
<button @click="changeH2" class="btn btn-primary">$refs позволяет напрямую управлять элементом дом</button>
</div>

<hr>
<div class="devider-title"> toggle с анимацией/ берем с сайта анимацию с стилями и оборачиваем то что нужно анимироватьв тег transition</div> 
<!-- refs -->
 <transition name="slide-fade">
<form v-if="showForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
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
<button class="btn btn-secondary" @click="showForm=!showForm ">{{showTextForm}}</button>

<hr>
<!-- -------------------------- -->
попаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопап

<!-- по клику переменной присваивается true и это идет в дочерний компонент через  :visible="visible"-->
<button class="btn btn-success" @click="visible = true ">
  <span class="icon-cool"></span>
  открыт попап?--- {{visible}}
</button>
<!-- родительский компонент принимает событие visibleChange от дочернего и здесь обрабатывает данные от дочерненего , то есть присваивает visible= $event -->
<popup @visibleChange="visible= $event" :visible="visible"></popup>   
<hr>
<!-- ------------------------ -->


<hr>
уничтожение приложения
<br>
  <button class="btn btn-danger" @click="$destroy() ">
    <span class="icon-warning"></span>
    !!!убить приложение!!!
    <span class="icon-notification"></span>
    </button>

<hr>
api axios


<div class="alert alert-warning" role="alert" v-if="errored">
 Запрос не обработан. Есть ошибки в запросе.
</div>

<ul>
  <li v-for="(course, index)  in courses"  :key="index">{{course.ccy}} buy:{{course.buy}} sale:{{course.sale}}</li>
</ul>



<hr>
пушится текст из инпута как отдельный пост в массив постов
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="inputWall" placeholder="The wall" @keyup.enter="addPost()"></textarea>
<ul class="mt-2 list-group">
  <li v-for="(post,index)  in posts"  :key="index" class="list-group-item">{{post}}</li>
</ul>

<hr>
карточка как компонент

<div class="d-flex justify-content-between">
<CardExample v-for="component in 4" :key="component"></CardExample>
</div>

<!-- ------------------------------------------------------------- -->
<!-- ------------------------------------------------------------- -->
<!-- ------------------------------------------------------------- -->
<!-- ------------------------------------------------------------- -->
  </div><!-- container -->
</template>


<script>
import popup from '@/components/popup'
import CardExample from '@/components/cardExample'
import axios from "axios";


export default {
  data(){
  return{
    inputWall:null,
    posts:[],
    errored:false,
    courses: [],
   visible: false  ,
    showForm: true,
    msg:"Hello,vue!!!",
    search:"",
    typeJob: "list",
    coun:0,
    c: 0,
    co:0,
    sizeToggle:false,
    isRounded:false,
    disabled:false,
    fontColor:'#ccc',
    backgroundColor:"yellow",
  message: "Hello, world!!!", 
 users: [
      {id:1, name: "Иван" },
      {id:2, name: "Марья" }
    ],   
showh2: true,
  counter1: 0,
    counter: 0,
    hashtags:[],
    mes:"",
    checked: true,
    count: "0",
    url: "",
    cleanUrl: "",
numbers	: [1,2,3],	
title: "Изменение свойств по чекбоксу"		 

}
  },

components:{
popup,
CardExample
},
methods:{

addPost(){
  this.posts.push(this.inputWall)
  this.inputWall=""
},
  // $refs позволяет напрямую управлять элементом дом
changeH2(){
this.$refs.h2.innerText="Привет!"
this.$refs.teext.style.color="red"
},
tutorialDemo: function() {
      this.coun++
    }
  ,
coIncrement(num){
this.co += num
this.setLicalcCounter()
},
coDecrement(){
 this.co--
 this.setLicalcCounter()
},
coReset(){
 this.co=0
},
setLicalcCounter(){
  localStorage.co=this.co
},
addnumbers(){
  let rnd = Math.floor(Math.random() * 11) -5;
this.numbers.push(rnd)
},  
nameFunction(){alert('nameFunction')},
high(){this.counter++;},
countUp(){this.count ++;},
countDown(){this.count --;},
cleanerUrl(){
  this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
}

  },
  

// все хуки жизненного цикла. если выводить в консоль ссообщение из пределенного хука, то можно отследить на каком этапе находится приложение в данный момент
beforeCreate(){
console.log("beforeCreate")
},
created(){
console.log("created")
 this.high()
},
beforeMount(){
console.log("beforeMount")
},
mounted(){
console.log("mounted")
// хранение данных пользователя в локальном хранилище.есть ньанс-- в хранилище всегда хранится строка. поэтому нужно при задании хранения в mounted вседа прописывать перевод значения в число
 if(localStorage.co){
this.co=Number(localStorage.co)
}


// запрос данных через api
axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then(response => (this.courses = response.data))
.catch(error=>{
  console.log(error)
  this.errored=true
  })
},
beforeUpdate(){
console.log("beforeUpdate")
},
updated(){
console.log("updated")
},
beforeDestroy(){
console.log("beforeDestroy")
},
destroyed(){
console.log("destroyed")
},



// вычисляется только по мере обращения к свойствам. в остальных случаях при обновлении страницы данные переменных computed берутся из кеша
computed: {
  showTextForm(){
    return this.showForm ? "Скрыть форму" : "Показать форму"
  },
  messResult(){
   return this.c > 3 ? "больше 3" : "меньше 3"
  },
  styles: function(){
    return{
    color: this.fontColor,
    background: this.backgroundColor
    }
  },
  sum(){
  let sum =0;
  for(let i=0; i< this.numbers.length; i++){
    sum += this.numbers[i];
  }
  return sum;
},
btnTexts(){
  return  this.showh2 ? 'Hide result' : 'Show result';
}
}
	
}
</script>
<style scoped>
*{
  list-style: none;
}
#exampleFormControlTextarea1{
  resize:none;
}
#exampleFormControlTextarea1:focus{
outline: none;
}
#exampleFormControlTextarea1:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}



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
  .large{
    font-size: 30px;
  }
  hr{
    background: blueviolet;
  }
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