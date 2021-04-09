<template lang="pug">
nav.navbar
  .nav-wrapper
    ul.navbar-menu()
        router-link(
          v-for="(pagesBatton , index) in pagesBattons" 
          :key="index" 
          tag="li"
          class="navbar-menu__item"
          active-class="navbar-menu__item--active"
          :to="pagesBatton.route"
          :exact="pagesBatton.exect"
          :regSuccess ="regSuccess"
          )
          a.waves-effect.waves-orange.pointer(href='#') {{pagesBatton.title}}

</template>
  
<script>


export default {

   data: () => ({
      
         pagesBattons: [
      {
        title: "Главная",
        route: "/",
        exect: true,

      },
      {
        title: "Авторизация",
        route: "/signIn",
      },
      {
        title: "Регистрация",
        route: "/SignUp",
      },
    ],
  }),
 
components: { 

 },

mounted() {     },

methods: { 
regSuccess(){
if($event) {this.pagesBatton.route == '/signIn'}
}

     },

computed:{      }

    }
</script>
  
<style	lang="sass" >
.navbar-menu__item--active
  background: lighten(#ee6e73, 10%)
  a
    color: #AD1457

</style>