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
        title: "Форма регистрации",
        route: "/Registration",
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
    }),  components: {    },  mounted() {     },  methods: {      },  computed:{      }
    }
</script>
  
<style	lang="sass" scoped>
  
</style>