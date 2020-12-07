<template>
<!--
https://www.youtube.com/watch?v=eEF6Szpda9g&ab_channel=UlbiTV
   здесь  vuetify router vuex axios  
модалка, вывод картинок с api, вывод картинки с компа, изменяющиеся компоненты

-->
  <v-app>
  <Navbar></Navbar>
  <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>






<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>