<template>
  <div id="app">
<Navbar></Navbar>
  </div><!-- app -->
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  name: 'App',
  components: {
    Navbar,
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
  margin: 200px 0 0 0;
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
textarea{
  resize:none;
}
textarea:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
hr{
  background: #FF5F0F;
}
h1{
  color: SlateGray;
}
h2{
color:  DarkSlateGray;
}

input:focus::-webkit-input-placeholder {copacity: 0; transition: opacity 0.3s ease;}

</style>
