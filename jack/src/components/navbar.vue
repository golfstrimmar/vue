<template lang="pug">

div  
  v-navigation-drawer(absolute  temporary v-model='drawer'  class="hidden-md-and-up")
    v-list
      v-list-item-group( active-class='deep-purple--text text--accent-4')
        router-link( v-for="( pagesBatton, index)  in pagesBattons"  :key="index"  :to = 'pagesBatton.route')
          v-list-item
            v-list-item-title {{pagesBatton.title}}
  v-app-bar(color='indigo accent-3' dense='' dark=''  elevation="8")
    v-app-bar-nav-icon(class="hidden-md-and-up" @click="drawer=!drawer")
    router-link( to="/" tag="span" style="cursor: pointer")
      v-toolbar-title.px-6
        v-row.align-center
          span.pl-2 JACK
    
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      router-link( v-for="( pagesBatton, index)  in pagesBattons"  :key="index"  :to = 'pagesBatton.route')
        v-btn.ml-3(text ) {{pagesBatton.title}}

      


</template>

<script>
export default {
  data: () => ({
    pagesBattons: [
      {
        title: "Home",
        name: "Home",
        route: "/",
      },
       {
        title: "Tasks",
        name: "Task",
        route: "/task",
      },
      {
        title: "Login",
        name: "Login",
        route: "/Login",
      },
      {
        title: "Registration",
        name: "Registration",
        route: "/Registration",
      }
    ],
    drawer:false,
  }),
  components: {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang="sass">
button 
  height: 100% !important
%box-shadow
  box-shadow: 0px 5px 14px 4px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.2), 0px 3px 14px 2px rgba(0, 0, 0, 0.15) !important


</style>
