<template lang="pug">

v-container(fluid)  
  v-navigation-drawer(absolute  temporary v-model='drawer'  class="hidden-md-and-up")
    v-list
      v-list-item-group( active-class='deep-purple--text text--accent-4')
        router-link( v-for="( pagesBatton, index)  in pagesBattons"  :key="index"  :to = 'pagesBatton.route')
          v-list-item
            v-list-item-title {{pagesBatton.title}}
  v-app-bar(color='indigo accent-3' dense='' dark=''  elevation="8")
    
    router-link( to="/" tag="span" style="cursor: pointer")
      v-toolbar-title
        span.pl-2 START
    
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      router-link( v-for="( pagesBatton, index)  in pagesBattons"  :key="index"  :to = 'pagesBatton.route')
        v-btn.ml-3(text ) {{pagesBatton.title}}
    v-app-bar-nav-icon(class="hidden-md-and-up" @click="drawer=!drawer")


</template>

<script>
export default {
  data: () => ({
    pagesBattons: [
      {
        title: "Home",
        route: "/",
      },
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

.v-image
  width: 40px
  height: 40px

</style>
