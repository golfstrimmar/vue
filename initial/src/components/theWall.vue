<template>
  <div class="container">
    <div class="row no-gutters flex-column">
      <!-- событие submit при нем не перезапустится страница и будет добавляться пост -->
    <form class="col-sm-6 mx-auto" @submit.prevent="addWallPost()">
      <div class="form-group">
        <label for="wall">wall</label>
        <!-- при клике на textarea она увеличится. то есть при фокусе -->
        <!-- снимаем значение wallPost.text -->
        <textarea class="form-control" id="wall" :rows="wallRows" placeholder="Что нового?" @click="wallRowsAdd() " v-model="wallPost.text"></textarea>
       </div>
       <!-- добавляем пост с текстом wallPost.text в массив постоов -->
       <button class="btn btn-primary" type="button" @click="addWallPost()">Опубликовать</button>
    </form>

    <div class="w-100"></div>

    <!-- карточка одиночного поста -->
    <!-- перебираем массив wallPosts -->
     <transition-group name="list" tag="p">
    <div class="card mt-3 col-sm-6 mx-auto" v-for="wallPost  in wallPosts"  :key="wallPost.id">
     
<div class="card-body">
      <div class="wall p-3 row no-gutters d-flex justify-content-between">
        {{wallPost.text}}
        <div >
          <span class="icon-pencil mr-2" @click="editWallPost(wallPost)"></span>
          <!-- передаем функции текущий id -->
          <span class="icon-cross" @click="delWallPost(wallPost.id)"></span>
        </div>
      </div><!-- wall -->
        <!-- показывается только для редактируемого поста -->
        <transition name="fade">
        <div class="mt-2" v-if="editPost === wallPost">
          <textarea  id=""  rows="3" class="form-control" v-model="editText"></textarea>
          <button class="btn mt-2 btn-secondary" @click="editWallPostSubmit() ">Редактировать</button>
        </div>
      </transition>
</div><!-- card-body -->
   
    </div><!-- card -->
   </transition-group>
  </div><!-- row -->
  </div> <!-- container -->
</template>

<script>
export default {

data() {
  return {
    wallRows: 1,
    wallCount:0,
    wallPosts:[],
    wallPost:{
      text: ''
    },
    editPost:{},
    editText: "",
  }
},
methods:{
  editWallPostSubmit(){
    this.editPost.text = this.editText
    this.editPost =null
  },

  wallRowsAdd(){
this.wallRows=3
  },

editWallPost(post){
this.editPost= post
this.editText= post.text

},
  delWallPost(id){
    // поиск в массиве по id
   const post_id = this.wallPosts.findIndex(post => post.id === id)
// если Post существет, то он удалясся из массива
   if(post_id !== -1){
     this.wallPosts.splice(post_id, 1)
   }
  },
  // добавляем пост в массив постоов 
  addWallPost(){
// проверяет есть ли текст в новом посте.и 
    if(this.wallPost.text){
      // увеличивает количество постов
      this.wallCount ++
      // добавляет новый пост с id равным новому количеству постов и текстом из v-model="wallPost.text"
    this.wallPosts.unshift(
      {
      id: this.wallCount,
      text: this.wallPost.text
      }
      )}
      this.wallPost.text=""
  }
}


}




</script>

<style lang="css" scoped>
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
 opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
textarea{
resize:none;
}
textarea:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
.wall span{opacity: .4; font-size: 12px;    }
.wall span:hover{color: blue}

</style>>
