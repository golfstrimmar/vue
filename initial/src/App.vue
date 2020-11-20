<template>
  <div id="app">
    <!-- <Mycomponent/> -->
    <!-- <MycomponentWork/> -->
    <!-- передача данных из досчернего компонента task с помощью метода props -->
    <!-- <task message="Hello" author="David" title="js" description="lorem"></task> -->
    <!-- <methods></methods> -->
      <!-- <demo></demo> -->
      <!-- <taskList></taskList> -->
      <Menu/>


      <!-- эти данные нужно спустить в компонент. для этого в компоненте --props -->
 
  <!-- <ToDoList -->
  <!-- :todos="todos" -->
  <!-- @remove-todo="removeTodo" -->
  <!-- ></ToDoList> -->

<!-- <addTodo @add-todo="addTodo"></addTodo> -->


  </div>
</template>

<script>
// import Mycomponent from '@/components/my-component'
// import MycomponentWork from '@/components/my-component-work'
// import task from '@/components/task'
// import demo from '@/components/demo'
// import methods from '@/components/methods'
// import taskList from '@/components/taskList'
import Menu from '@/components/Menu'
// import ToDoList	from '@/components/ToDoList'
// import addTodo from '@/components/addTodo'
export default {  
  name: 'App',
  components: {
    // Mycomponent,
    // MycomponentWork,
    // task,
    // demo,
    // methods,
    // taskList,
   Menu,
  // ToDoList,
  // addTodo
  },
  data(){
return{
  // todos:[
  //   {id:1, title:"Купить хлеб", completed: false   }, 
  //   {id:2, title:"Купить масло", completed: false},
  //   {id:3, title:"Купить пиво", completed: false}
  // ]
}
  },
  methods:{
    // removeTodo(id){
    //   this.todos = this.todos.filter(t => t.id !=id)
    // },
    // addTodo(todo){
    //   this.todos.push(todo)
    // }
  },
  // mounted(){
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  // .then((response) => response.json())
  // .then(json=>{this.todos = json})
  // }
}
</script>

<style >
*{
  box-sizing: border-box;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
.container{
margin-top: 50px;
}


</style>
