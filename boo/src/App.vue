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
  margin: 60px 0 0 0;
}

</style>
