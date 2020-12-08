<template lang="pug">
   

div  
  v-navigation-drawer(absolute  temporary v-model='drawer'  class="hidden-md-and-up")
    v-list
      v-list-item-group( active-class='deep-purple--text text--accent-4')
        v-img(src="../assets/t7.png" style="margin: 0 auto;") 
        router-link( v-for="( pagesBatton, index)  in menuItems"  :key="index"  :to = 'pagesBatton.route')
          v-list-item
            v-list-item-title {{pagesBatton.title}}
  v-app-bar(color='indigo accent-3' dense='' dark=''  elevation="8")
    v-app-bar-nav-icon(class="hidden-md-and-up" @click="drawer=!drawer")
    router-link( to="/" tag="span" style="cursor: pointer")
      v-toolbar-title.px-6
        v-row.align-center
          v-img(src="../assets/t7.png" ) 
          span.pl-2 START
    
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      router-link( v-for="( pagesBatton, index)  in menuItems"  :key="index"  :to = 'pagesBatton.route')
        v-btn.ml-3(text ) 
          v-icon.mr-1  {{pagesBatton.icon}}
          span {{pagesBatton.title}}



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

<style lang="scss">
button {
  height: 100% !important;
}
.v-image{
width: 40px;height: 40px;
}
</style>
