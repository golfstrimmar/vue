<template>
  <div id="app">
    <Navbar></Navbar>
   <AppFooter></AppFooter>
  </div>
</template>

<script>
 import Navbar from '@/components/navbar'
 import AppFooter from '@/components/appFooter'

export default {
    name: 'App',
  components:{
    Navbar,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.container{
  background: Bisque;
  border-radius: 4px;
}

*{
  box-sizing: border-box;
  list-style: none;
}
body{
  background:WhiteSmoke;
}

</style>
