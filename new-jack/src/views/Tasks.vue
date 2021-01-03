<template lang="pug">
v-container
    h1.mb-5 Tasks
    v-row
        v-card.mr-5.pa-4(
            v-for="( task, index) in tasks" 
            :key="task.id"
            :class="{completed: task.completed}"
            dark color='light-blue accent-2'
            elevation="8" 
        )
            v-icon.float-right() mdi-close
            v-card-title.pa-0 {{task.title}}
            v-card-text.pa-0 {{task.discription}}
            v-card-text.pa-0 {{task.whatWatch}}
            v-card-text.pa-0 Total Time:
            v-checkbox(v-model='task.completed'  color='indigo'  hide-details='')
</template>
  
<script>
export default {
   data: () => ({ 
     tasks:[
    {
        id: "1", 
        title:"Halk",
        discription: "best movie of all time",
        whatWatch:"Film",
        completed: false,
        editing: false
    
    },
    {
        id: "2", 
        title:"Svaty",
        discription: "the best TV series ever watched",
        whatWatch:"Serial",
        completed: false,
        editing: false
    
    },
]
    }),  components: {    },  mounted() {     },  methods: {      },  computed:{      }
    }
</script>
  
<style	lang="sass" scoped>
.v-icon
  &:hover
    cursor: pointer
</style>