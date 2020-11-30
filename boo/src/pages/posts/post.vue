<template>
    <div class="container">
        <h1>Post {{ id }} </h1>


        
        <!-- кнопка возврата --https://router.vuejs.org/ru/guide/essentials/navigation.html-->
      <button class="btn-primary btn" @click="back">  Назад</button>
    </div>
</template>
  
<script>
export default {
  data(){
    return{
      // из плагина router берется переменная route и у нее выбирается параметр id. этот id заводится в верстку
      id: this.$route.params['id']
    }
  },
  methods:{
    // возвращение на страницу постов
    back(){
      this.$router.push({name:'posts'})
    }
  },
  // для вывода единичного поста. отслеживает изменения id 
  watch: {
    $route(toRoute){
      this.id = toRoute.params['id']
    }
  }
  }
</script>
  
<style	lang="css" scoped>
  *{
  list-style: none;
  }
</style>