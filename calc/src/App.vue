<template>
<div class="grid">  
  <input type="text" placeholder="0" v-model="result" @keyup.enter="calc()">
  <button v-for="nam in numbers" :key="nam" class="cell num" @click="input(nam)">{{nam}}</button>
  <button v-for="operation in operations" :key="operation" class="cell op" @click="input(operation)">{{operation}}</button>
  <button class="cell op" @click="reset()">R</button>
  <button class="cell op" @click="calc()">=</button>
</div>

</template>

<script>

export default {
  name: 'App',
  data(){
    const data={}
 data.result = ""
data.numbers=[1,2,3,4,5,6,7,8,9,0]
data.operations=["+","-","*","/"]
    return data
  },
  methods:{
reset(){
  this.result=""
},
input(par){
  this.result = this.result.toString()
  this.result += par
},
calc(){
  this.result=eval(this.result)
}
  }
}
</script>

<style>
* {
  font-family: 'Gilroy',sans-serif;
  transition: 0.3s all;
    font-weight: 600;
}
#app {
  width: 200px;
  box-shadow: 0 3px 15px grey;
  margin: 20px auto;
}
input[type="text"] {
  width: 200px;
  border: 0;
  color: #243849;
  font-size: 18px;
  padding: 5px 5px;
  text-align: right;
}
.grid {
  display: flex;                       
  flex-wrap: wrap;  
  justify-content: space-around;
  width: 100%;
  
}
.cell {
  flex: 33%;                       
  height: 50px;
  font-size: 18px;
  border: none;
}
.num {
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.cell:hover{
  background-color: #182530;
}
.op {
  background-color: #ff9900;
  color: #243849;
}

</style>
