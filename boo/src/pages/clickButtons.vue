<template>
    <div class="container">
        <h1>Страница кнопок</h1>
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
  <ul>
    <li v-for="( user, index)  in users"  :key="index">{{user.id}}: {{user.name}}</li>
  </ul>
  <button 
  class="btn btn-warning"
  @click="users[1].id=20"
  >поменяет по клику на кнопку значение свойства id у второго элемента массива users на 20</button>
</div>
<hr>

<!-- ----------очищает url от https://--------------------- -->
очищает url от https://<br>
<div class="container">
  
  <h1>Url:
     <a :href="url">{{cleanUrl}} </a>
  </h1>

  <input 
  type="text" 
  class="form-control" 
  v-model="url"
  >

  <button
   @click="cleanerUrl" 
   class="btn btn-primary mt-4"
   >Clean Url
   </button>

</div>  
<hr>
событие подъема кнопки @keyup.enter
<br>
пушится текст из инпута как отдельный пост в массив постов
<textarea
 class="form-control" 
 id="exampleFormControlTextarea1" 
 rows="3" 
 v-model="inputWall" 
 placeholder="The wall" 
 @keyup.enter="addPost()"
 >
 </textarea>

 <p>здесь будут посты</p>

<ul class="mt-2 list-group">
  <li
   v-for="(post,index)  in posts"  
   :key="index" 
   class="list-group-item"
   >
   {{post}}
   </li>
</ul>
             

<hr>
<!-- ----------------------------------- -->
<!-- ----------------------------------- -->
<!-- ----------------------------------- -->
<!-- ----------------------------------- -->
    </div>
</template>
  
<script>
export default {
data(){
  return{

inputWall:null,
posts:[],

// <!-- ----------очищает url от https://--------------------- -->
 url: "",
 cleanUrl: "",
// ------------------------------
    showh2: false,
    users: [
      {id:1, name: "Иван" },
      {id:2, name: "Марья" }
    ], 
  }
},
methods:{

  addPost(){
  this.posts.push(this.inputWall)
  this.inputWall=""
},
  // / <!-- ----------очищает url от https://--------------------- -->
  cleanerUrl(){
  this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
}
}
  }
</script>
  
<style	lang="css" scoped>
  
</style>