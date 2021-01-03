<template lang="pug">
v-container
    v-text-field(
        label='What will your like to whatch?'
        v-model="taskTitle"
        @keyup.enter="newTask"
        )
    v-textarea(
        name='input-7-1' 
        label='Film or serial description '
        v-model="taskDescription"
        @keyup.enter="newTask"
         )
    v-radio-group(mandatory)
        v-radio( label='Film' :value='Film' )
        v-radio( label='Serial' :value='Serial')

    v-row
        v-card.mr-5.pa-4(
            v-for="( task, index) in tasks" 
            :key="task.id"
            :class="{completed: task.completed}"
            dark color='light-blue accent-2'
            elevation="8" 
        )
            v-card-text.pa-0.justify-end.d-flex
                v-icon() mdi-close
            v-card-title.pa-0 {{task.title}}
            v-card-text.pa-0 {{task.discription}}
            v-card-text.pa-0 {{task.whatWatch}}
            v-card-text.pa-0 Total Time:
            v-checkbox(v-model='task.completed'  color='indigo'  hide-details='')
</template>
<script>
export default {
  data: () => ({ 
      taskTitle: "",
      taskDescription: "",
      taskId: 3,
      whatWatch: "film",
      alert: true,
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
   }), 
    components: {    },
      mounted() {     }, 
       methods: { 
           newTask(){
               if(this.taskTitle === ""){
                   return
               }
               this.tasks.push({
                    id: this.taskId,
                    title: this.taskTitle,
                    discription: this.taskDescription,
                    whatWatch: this.whatWatch,
                    completed: false,
                    editing: false
               }
               )
            //    reset
            this.taskId +=1
            this.taskTitle=""
            this.taskDescription=""
           }
            },
         computed:{      }
    }
</script>
  
<style	lang="sass" >
.v-icon
    &:hover
        cursor: pointer

</style>