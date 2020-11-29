<template>
    <div class="container">
        <h1>Страница счетчиков</h1>
        <hr>  
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
  <li v-for="(number,index) in numbers" :key="index"	>
    {{number}}
  </li>
</ul>

<hr>		
<!-- ---по нажатию на кнопку добавляется рандомное число в диапазоне от -5 до 5 и все элементы массива суммируются------------ -->
по нажатию на кнопку в верхний массив добавляется рандомное число в диапазоне от -5 до 5 и все элементы массива суммируются
<br>
<button class="btn btn-danger"
@click="addnumbers()"
>
Add number 
</button>
<h3>Your count: {{sum}}</h3>
<ul>
  <li v-for="(number,index) in numbers" :key="index"	 >
    {{number}}
  </li>
</ul>
<hr>		

<!-- // здесь используется локальное хранилище данных -->
<!-- https://vuejs.org/v2/cookbook/client-side-storage.html -->
счетчик <br>
<h2 >{{co}}</h2> 
<button class="btn btn-outline-success mb-2" @click="coIncrement(15)" type="button">+15</button>
<button class="btn btn-outline-success mb-2 ml-2 " @click="coReset()" type="button">Reset</button>
<button class="btn btn-outline-success mb-2 ml-2" @click="coDecrement()" type="button">-1</button> 

<hr>

<!-- --------счетчик form------------------------------- -->
 <h1 @click="tutorialDemo">счетчик:{{coun}}</h1>
<a href="#" @click="tutorialDemo()">просто увеличивает счетчик по клику сюда</a>
  <!-- если typeJob == 'list'  то присваивается класс 'border-primary' --иначе 'border-danger' -->
       <form class="border m-2 p-4" :class="typeJob == 'list' ? 'border-primary' : 'border-danger'">
        <div class="form-row">
если typeJob == 'list'  то присваивается класс 'border-primary'---расмка станет синей
<br>
если typeJob == 'search'  то присваивается класс 'border-danger'  ---рамка станет красной
<br>
            <div class="form-group col-12 row justify-content-center mt-3">

<!-- :checked="typeJob == 'list'" ---будет выдавать  typeJob == 'list' -->
              <label class="mr-5" >
              <input 
              type="radio" 
              name="type" 
              v-model="typeJob" 
              value="list" 
              :checked="typeJob == 'list'"
              > list
              </label>
               
               <br>
<!-- :checked="typeJob == 'search'" ---будет выдавать  typeJob == 'search' -->
              
              <label >
              <input 
              type="radio" 
              name="type" 
              v-model="typeJob" 
              value="search" 
              :checked="typeJob == 'search'"
              > search
              </label>


            </div><!-- form-group col-12 -->
          

          
          <div class="form-group col-12" v-if="typeJob=='search'">
           
            <label 
              class="mr-3 ml-0">
              появляется если typeJob=='search'
              <br>
              Поиск {{search}}
            </label> 
           
        <!-- подсчитывает количество символов в тексте поиска -->
            <label 
            v-if="search.length"
            > количество символов  {{search.length}}
            </label> 

          </div>

        <!-- появляется если typeJob=='search' -->
          <div class="form-group col-12" v-if="typeJob=='search'">
            <input 
            type="text" 
            class="form-group col-12" 
            name="search" 
            v-model="search" 
            placeholder="Введите текст и vue подсчитает количество символов">
          </div>

         
        </div><!-- form-row -->
      </form>
      



<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
<!-- --------------------------------------- -->
    </div>
</template>
  
<script>
export default {
data(){
  return{


// <!-- --------счетчик form------------------------------- -->



search:"",
coun:0,
 typeJob: "list",
// ----------------
    numbers	: [1,2,3],
     counter1: 0,
      counter: 0,
      sum:0,
      co:0,
      number:0,
      num:0,
  }
},
methods:{
addnumbers(){
  let rnd = Math.floor(Math.random() * 11) -5;
this.numbers.push(rnd)
},


// <!-- --------счетчик form------------------------------- -->
tutorialDemo: function() {
      this.coun++
    }
  ,


// здесь используется локальное хранилище данных
// в этом случае при перзагрузке страницы -данные сохраняются
// https://vuejs.org/v2/cookbook/client-side-storage.html
setLicalcCounter(){
  localStorage.co=this.co
},

coIncrement(num){
this.co += num
this.setLicalcCounter()
},

coReset(){
 this.co=0
}, 
coDecrement(){
 this.co--
 this.setLicalcCounter()
},
  },

mounted(){
console.log("mounted")
// хранение данных пользователя в локальном хранилище.есть ньанс-- в хранилище всегда хранится строка. поэтому нужно при задании хранения в mounted вседа прописывать перевод значения в число
 if(localStorage.co){
this.co=Number(localStorage.co)
}
}




}
</script>
  
<style	lang="css" scoped>
  
</style>