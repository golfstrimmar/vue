<template>
  <div class="training">
   <h1>Math training</h1>
   <hr>
   <app-start-screen v-if="state == 'start'"></app-start-screen>
   <app-question v-else-if="state == 'question'"></app-question>
   <app-message v-else-if="state == 'message'"></app-message>
   <app-result-screen v-else-if="state == 'result'"></app-result-screen>
   
   <div v-else>Unknown state</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     state: "start"
    }
  }
}
</script>

<style scoped>
.training{
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:20px auto;
  max-width: 700px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
