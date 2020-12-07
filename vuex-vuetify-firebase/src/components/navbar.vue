<template lang="pug">
   
div
  v-toolbar.primary(app dark )
    v-app-bar-nav-icon
    v-toolbar-title(v-text="'Learn  German'")
    v-spacer
    v-toolbar-items
      v-btn( text
        v-for="( menuItem, index)  in menuItems"  :key="index"
        ) 
        v-icon( 
          left 
          ) {{menuItem.icon}}
        span {{menuItem.title}}

  
  
  
  //- v-card(
  //-   color='grey lighten-4' 
  //-   flat='' 
  //-   height='200px'
  //-    tile='')
  //-   v-navigation-drawer(
  //-     v-model='drawer' absolute  temporary 
  //-     class="hidden-md-and-up"
  //-     )
  //-     v-list
  //-       v-list-item-group( 
  //-         active-class='deep-purple--text text--accent-4')
  //-         v-list-item(  v-for="( menuItem, i)  in menuItems"  :key="i")
  //-           v-icon(left ) {{menuItem.icon}}
  //-           v-list-item-title {{menuItem.title}}
    
  //-   v-toolbar.primary(
  //-     dark , app
  //-     )
  //-     v-app-bar-nav-icon(
  //-       @click.stop="drawer=!drawer"
  //-       class="hidden-md-and-up"
  //-       )
  //-     router-link( to="/" tag="span" style="cursor: pointer")
  //-       v-toolbar-title Title
      
  //-     v-spacer
  //-     v-toolbar-items(class="hidden-sm-and-down")
  //-       router-link(
  //-         v-for="( menuItem, i)  in menuItems"  :key="i"
  //-         :to="menuItem.route"
  //-         ) 
  //-         v-btn(
  //-           text small
  //-           ) 
  //-           v-icon(
  //-             left 
  //-           ) {{menuItem.icon}}
  //-           span {{menuItem.title}}



<!-- <router-link to="/">
<v-btn  outlined class="ml-3">Home</v-btn>
</router-link>
<router-link to="/about">
<v-btn  outlined class="ml-3">About</v-btn>
</router-link>
<router-link to="/MainPage">
<v-btn  outlined class="ml-3">MainPage</v-btn>
</router-link>
<router-link to="/PhotosPage">
<v-btn  outlined class="ml-3">PhotosPage</v-btn>
</router-link> -->


</template>

<script>
  export default {
     data: () => ({ 
       drawer: false
      }),  components: {    },  mounted() {     },  methods: {      },  computed:{ 
       menuItems(){
         return [
{
title:"Главная",
route: "/",
icon: 'mdi-home'
},
{
title:"Читать",
route: "/Books",
icon: 'mdi-arrange-send-backward'
},
{
title:"Учить слова",
route: "/Words",
icon: 'mdi-library'
},
{
title:"Moй кабинет ",
route: "/profile",
icon: 'mdi-account-box-outline'
},
{
title:"Выйти",
route: "/Logout",
icon: 'mdi-logout'
},
{
title:"Войти",
route: "/Signin",
icon: 'mdi-login' 
},
{
title:"Зарегестрироваться",
route: "/Signup",
icon: 'mdi-checkbox-marked-circle'
},
         ]
}
       
          }
  }
</script>

<style scoped>

</style>