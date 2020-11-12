<template>
  <div id="app">
    <!-- <Mycomponent/> -->
    <MycomponentWork/>
  </div>
</template>

<script>
	// import Mycomponent from '@/components/my-component'
import MycomponentWork from '@/components/my-component-work'
export default {
  name: 'App',
  components: {
    // Mycomponent,
    MycomponentWork,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
