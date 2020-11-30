<template>
  <div id="app">
   
<b-container>
  {{alphbetCifr}}
 <b-row >
    <b-col lg="6">
     <label  for = "textarea-large" ><h2>Шифр цезаря</h2> </label > 
     <b-form-textarea 
        id = "textarea-large" 
        size = "lg"
        rows = "6"
        placeholder = "Напишите текст для шифровки" 
        v-model="text"
      > 
      </b-form-textarea >
      </b-col>
    <b-col  lg="6">
     <label  for = "textarea-large" ><h2>Результат</h2> </label > 
     <b-form-textarea 
        id = "textarea-large" 
        size = "lg"
        rows = "6"
        v-model="textChiper"
        disabled
      > 
      </b-form-textarea >
      </b-col>
  </b-row>

<b-row  class="mt-3">
  <b-col  lg="2">
  <b-form-select v-model="selected" :options="options"></b-form-select>
    <h4 class="mt-3">Сдвиг: <strong>{{ selected }}</strong></h4>
  </b-col>


<b-col  lg="2">
  <b-button 
  variant="primary"
  @click="encript "
  >Зашифровать</b-button>
</b-col>
<b-col  lg="2">
  <b-button
   variant="success"
   @click="decript "
   >Разшифровать</b-button>
</b-col>


</b-row>



</b-container>






  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        alphabet: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        alphbetCifr: "",
        text: "",
textChiper: "",
        selected: null,
// удаляется потому как будут генерироваться в computed
        // options: [
        //   { value: null, text: 'Сдвиг' },
         
        // ]


      }
    },

methods:{
  encript(){
this.alphbetCifr = this.alphabet
this.alphbetCifr = this.shiftArray(this.alphbetCifr.split(''), this.selected).join('')
  },
  decript(){},
  shiftArray(arr,num){
    return arr.slice(num).concat(arr.slice(0,num))
  }
},


    // генерируем options
    computed:{
options(){
let options = [{value: null, text: 'Сдвиг'}]
for(let i = 1;  i <= 33; i++){
options.push(
  {
    value: i,
    text: i
  }
)
}

return options


}
    }
}
</script>

<style>
body{ background-color:#E97451;}
#app {
  font-family: 'Sansita Swashed', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  /* background: Bisque; */
  border-radius: 4px;
}

.row{
  /* border: 1px solid grey; */

}
.col{
  /* background: #EDEADE; */
  /* border: 1px solid blue; */
}
textarea {
  resize:none;
}
textarea:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
</style>
