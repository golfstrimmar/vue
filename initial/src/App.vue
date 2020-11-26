<template>
  <div id="app">
    <!-- <FormExample></FormExample> -->
    <!-- <Form/> -->
    <!-- <MycomponentWork/> -->
    <!-- передача данных из досчернего компонента task с помощью метода props -->
    <!-- <task message="Hello" author="David" title="js" description="lorem"></task> -->
    <!-- <methods></methods> -->
    <!-- <theWall></theWall> -->
      <!-- <demo></demo> -->
      <!-- <taskList></taskList> -->
      <!-- <Menu/> -->
<!-- <css></css> --> 
 
<counterButton>
  <!-- передача html в дочерний компонент. там должен быть тег slot -->
  
  <h3 slot="title">счетчик</h3>
  <div class="w-100"></div>
  <!-- something прописано здесь а е в дочернем -->
  <p slot="description">{{something}}</p>
</counterButton>
<Button></Button>

      <!-- эти данные нужно спустить в компонент. для этого в компоненте --props -->
 
  <!-- <ToDoList -->
  <!-- :todos="todos" -->
  <!-- @remove-todo="removeTodo" -->
  <!-- ></ToDoList> -->

<!-- <addTodo @add-todo="addTodo"></addTodo> -->


  </div>
</template>

<script>
// import Form from '@/components/form'
// import FormExample from '@/components/form-example'
// import MycomponentWork from '@/components/my-component-work'
// import task from '@/components/task'
// import demo from '@/components/demo'
// import methods from '@/components/methods'
// связь двух компонентов Button counterButton 
import Button from '@/components/Button'
import counterButton from '@/components/counterButton'

// import theWall from '@/components/theWall'
// import css from '@/components/css'
// import taskList from '@/components/taskList'
// import Menu from '@/components/Menu'
// import ToDoList	from '@/components/ToDoList'
// import addTodo from '@/components/addTodo'
export default {  
  name: 'App',
  components: {
    // FormExample,
    // Form,
    // MycomponentWork,
    // task,
    // demo,
    // methods,
    Button,
    counterButton,
// theWall,
    // css,
    // taskList,
  //  Menu,
  // ToDoList,
  // addTodo,
  },
  data(){
return{
  something: "какое-то описание",
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
body{
  background:WhiteSmoke;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 20px 50px;

}

.container{
  background: Bisque;
  border-radius: 4px;
}
hr{
  background: blue;
}
h1{
  color: SlateGray;
}
h2{
color:  DarkSlateGray;
}

 .devider-title{
color: purple;
background: salmon;
  }
</style>
