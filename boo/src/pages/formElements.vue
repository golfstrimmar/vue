<template>
    <div class="container">
        <h1>Страница элементов </h1>







<hr> 
 хороший селект из bootstrap-vue

  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>



        <hr>  
  v-model.number будет валидировать входные данные --- только цифры

<textarea
 name="rrr" 
 class="form-control"
  id="rrr"   
  v-model.number="textareaContent"
>
</textarea> 

<p>{{textareaContent}}</p> 
<hr> 
<br>
инпут checkbox выводит элемент массива   checkboxes:[],
у всех элементов один v-model="checkboxes"
<div class="d-flex flex-column mb-2">
    <label class="form-check-label" >
      <input
       class="form-check-input" 
       type="checkbox" 
       value="бытовая техника"
        v-model="checkboxes">
      бытовая техника
    </label>
    <label class="form-check-label" >
      <input 
      class="form-check-input" 
      type="checkbox" 
      value="планшеты" 
      v-model="checkboxes"
      >
      планшеты
    </label>
    <label class="form-check-label" >
      <input 
      class="form-check-input"
       type="checkbox"
        value="телефоны" 
        v-model="checkboxes"
        >
      телефоны
    </label>
</div>
<br>
здесь вывод выбранных пунктов
<ul
 v-for="(checkbox , index)  in checkboxes"  
 :key="index"
 >
  <li >{{checkbox}}</li>
</ul>
<hr> 
<br>
здесь радиокнопками выбирается один пункт. 
<div class="form-check">
  <input
   class="form-check-input" 
   type="radio" 
   name="exampleRadios" 
   id="exampleRadios1" 
   value="option1" 
   checked 
   v-model="radio"
   >
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>

<div class="form-check">
  <input
   class="form-check-input" 
   type="radio" 
   name="exampleRadios"
    id="exampleRadios2"
     value="option2" 
     v-model="radio"
     >
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>


<div class="form-check disabled">
  <input 
  class="form-check-input" 
  type="radio" 
  name="exampleRadios" 
  id="exampleRadios3" 
  value="option3"  
  v-model="radio"
  >
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>


  <p>{{radio}}</p>
<hr> 
select
<br>
здесь указан выбор по умолчанию пункта . можно его не ставить, тогда будет choose .. из массива selects выбираются элементы и загружаются в селект
  <select
   id="inputState" 
   class="form-control" 
   v-model="select"
   >
        <option >choose..</option>  
        <option
         v-for="(select , index)  in selects"  
         :key="index"
         >
         {{select}}
         </option>
  </select>
  <p>{{select}}</p>
<!-- -------------------------------- -->



<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- --------------------------- -->
<!-- --------------------------- -->
    </div>
</template>
  
<script>
export default {
data() {
  return {
    textareaContent:"",
    checkboxes:[],
    radio:'',
    select:'планшеты',
    selects:['бытовая техника','планшеты','телефоны'],
      selected: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
  }
},
  }
</script>
  
<style	lang="css" scoped>
  
</style>