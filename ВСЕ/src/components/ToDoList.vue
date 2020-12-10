<template>
  <div class="container">
    <h2>To do aplication</h2>
<hr>
<ul class=" row no-gutters">
  <todoItem
  v-for="(todo, i) of todos"
  :key=todo.number		
  :todo="todo"
  :index="i"
  @remove-todo-item="removeTodo"
  />
</ul>
  </div>
  <!-- // и данные нужно передать дальше в дочерний компонент -->
</template>



<script>
// и данные нужно передать дальше в дочерний компонент todoItem		с помощью props
import todoItem	 from '@/components/todoItem'
export default { 
  props:[
    'todos'
   ],
  components: {
  todoItem
  } ,
  methods:{
    removeTodo(id){
      this.$emit('remove-todo',id)
    }
  }

}
</script>

<style lang="css">
  *{
  list-style: none;
  margin: 0 0 0 0;  
  padding: 0 0 0 0;	
}
</style>