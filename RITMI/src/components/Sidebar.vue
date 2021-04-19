<template lang="pug">

ul.sidenav.app-sidenav(:class="{open: value= value}")
  router-link(
    v-for="(pagesBatton , index) in pagesBattons" 
    :key="index" 
    tag="li"
    active-class="active"
    :to="pagesBatton.route"
    :exact="pagesBatton.exect"
    )
    a.waves-effect.waves-orange.pointer(href='#') {{pagesBatton.title}}
 
</template>
  
<script>
export default {
  props: ['value'],
   data: () => ({
         pagesBattons: [
      {
        title: "Главная",
        route: "/",
        exect: true
      },
      {
        title: "Расписание турнира",
        route: "/Timetable",
      },
      {
        title: "Регистрация",
        route: "/Registration",
      },
      {
        title: "Регистрация e-mail",
        route: "/SignUpp",
      },
      {
        title: "Кто уже с нами",
        route: "/Categories",
      },
      {
        title: "Контакты",
        route: "/Contacts",
      },
    ],
    }),  components: {    },  mounted() {     },
      methods: { 
         async logout(){
          await  this.$store.dispatch('logout')
          }

         },  computed:{      }
    }
</script>
  
<style	lang="sass" scoped>
  
</style>