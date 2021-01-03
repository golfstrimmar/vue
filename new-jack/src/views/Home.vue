<template lang="pug">
v-container
    h1.mb-5 Home
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
    v-radio-group(mandatory
        v-model="whatWatch"
        )
        v-radio( 
            label='Film'
            value='Film' 
            )
        v-radio(
             label='Serial' 
             value='Serial'
             )


</template>
<script>
export default {
  data: () => ({ 
      taskTitle: "",
      taskDescription: "",
      taskId: 3,
      whatWatch: null,
      alert: true,


   }), 
    components: {    },
      mounted() {     }, 
       methods: { 
           newTask(){
               if(this.taskTitle === ""){
                   return
               }
               const task ={
                    id: this.taskId,
                    title: this.taskTitle,
                    discription: this.taskDescription,
                    whatWatch: this.whatWatch,
                    completed: false,
                    editing: false
               }
               console.log(task)
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


</style>