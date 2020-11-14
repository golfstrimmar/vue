<template>
  <div id="app">
    <!-- <Mycomponent/> -->
    <!-- <MycomponentWork/> -->
    <!-- передача данных из досчернего компонента task с помощью метода props -->
    <!-- <task message="Hello" author="David" title="js" description="lorem"></task> -->
    <methods></methods>
      <!-- <demo></demo> -->
      <!-- <taskList></taskList> -->
      <!-- <Menu/> -->
  </div>
</template>

<script>
// import Mycomponent from '@/components/my-component'
// import MycomponentWork from '@/components/my-component-work'
// import task from '@/components/task'
// import demo from '@/components/demo'
import methods from '@/components/methods'
// import taskList from '@/components/taskList'
// import Menu from '@/components/Menu'
export default {  
  name: 'App',
  components: {
    // Mycomponent,
    // MycomponentWork,
    // task,
    // demo,
    methods,
    // taskList,
  //  Menu
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  margin: 0 50px;	
}
</style>
