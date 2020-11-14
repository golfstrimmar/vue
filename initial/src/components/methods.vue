<template>
  <div class="container">
	
<!-- click -->
<div >
  <button 
  class="btn btn-dark"
  @click="counter1 += 1"
  >button</button>
  <p>Кнопка выше была нажата {{ counter1 }} раз</p>
</div>
<hr>
<!-- --------------- -->
<!-- <button class="btn btn-danger"
@click="numbers.push(Math.random())"
>
Add number 
</button>

<ul>
  <li 
  v-for="number in numbers"
  :key="number"		
   >
    {{number}}
  </li>
</ul> -->


<hr>		
<!-- ---по нажатию на кнопку добавляется рандомное число в диапазоне от -5 до 5 и все элементы массива суммируются------------ -->
<button class="btn btn-danger"
@click="addnumbers"
>
Add number 
</button>
<h3>Your count: {{sum}}</h3>
<ul>
  <li 
  v-for="number in numbers"
  :key="number"		
   >
    {{number}}
  </li>
</ul>


<hr>		
<!-- ----- переключает появление заголовка------------ -->
<button class="btn btn-success"
@click="showh2=!showh2"
>
 {{btnTexts}}
</button>

<h2 v-show="showh2">
  hello!!!
</h2>
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
<h5 style="background: #FA8072;">раздел css</h5>

<hr>
<!-- ------------------------------- -->
<h5>{{title}}</h5>
<button class="btn btn-primary" 
:class="[sizeToggle ? 'large' : '',{'rounded': isRounded}]"
:style="styles"
:disabled="disabled"

>start</button>
<ul>
  <li><input type="checkbox" v-model="sizeToggle"><label for="">Увеличить шрифт</label></li> 
  <li><input type="checkbox" v-model="isRounded"><label for="">Округлить</label></li> 
  <li><input type="checkbox" v-model="disabled"><label for="">disabled</label></li> 
  <li><input type="text" v-model="fontColor"></li> 
  <li><input type="text" v-model="backgroundColor"></li> 
</ul>
<hr>
<!-- ------------------------------- -->
  </div>
</template>

<script>
export default {
  data(){
  return{
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
methods:{

addnumbers(){
  let rnd = Math.floor(Math.random() * 11) -5;
this.numbers.push(rnd)
},  
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
computed: {
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

</style>