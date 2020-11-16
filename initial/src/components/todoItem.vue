<template>
    <li class="col-12">
      <span :class="{done: todo.completed }"  >
       <!-- по клику меняет свойство todo.completed	на противоположное -->
        <input type="checkbox"
          @change="todo.completed = !todo.completed		"
        >
        <strong>{{index + 1}}</strong>
        {{todo.title}}
      </span>
      <button class="btn btn-success"
      @click="$emit('remove-todo-item', todo.id)"
      >&times;</button>
    </li>
</template>

<script>

// эти данные пришли из родительского компонента
export default {
  props:{
    todo:{
      type:Object,
      required: true,
    },
    index: Number
  }
}
</script>

<style lang="css" scoped>

  li{
    margin: 0 0 20px 0;
    border: 1px solid bisque;
    padding: 5px 15px !important;	
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: plum;
    border-radius: 4px  ;
  }
  strong,input{
    margin: 0 10px 0 0;
  }
  .btn{
margin: 0 0 0 10px;
padding: 5px;	
width: 20px;
height: 20px;
font-size: 15px;
 display: flex;
    justify-content: center;
    align-items: center;		
line-height: 1;
  }
  .done{
    text-decoration: line-through;
  }
</style>