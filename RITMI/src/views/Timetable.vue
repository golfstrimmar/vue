<template lang="pug">
div
    //- .timetable__wrapper
    section
        .task-input
            form(@submit.prevent="newTask")
                .input-field
                            input.task-input.validate(
                                type="text"
                                id="id"
                                v-model="taskId"
                            ) 
                            label( for="id")  новое id
                .input-field
                            input.task-input.validate(
                                type="text"
                                id="title"
                                v-model="taskTitle"
                            ) 
                            label( for="title")  новый заголовок
                .input-field
                            input.task-input.validate(
                                type="text"
                                id="description"
                                v-model="taskDescription"
                            ) 
                            label( for="description")  новое описание
                button.task-button.waves-effect.waves-light.btn(
                    type="submit"
                    ) загрузить 
        .task-list
            .task-item(
                v-for="task in tasks"
                :key="task.id"
                :class="{completed: task.completed}"
            )
                p  {{task.id}} 
                p  {{task.title}}
                p  {{task.description}}
                p  {{task.complited}}
                p  {{task.editing}}

</template>
  
<script>

export default {

components: {
},
    data (){ 
return{

taskId:'',
taskTitle:'',
taskDescription:'',



   }
   },

computed: {
    tasks() {
        return this.$store.getters.tasks
    }
},

// ----------------------------
  methods: { 
     newTask(){

if (this.taskTitle==='') {
    return
}

// this.tasks.push(
// вместо этого метода заводим константу
const task = {
    id: this.taskId,
    title:  this.taskTitle,
    description: this.taskDescription
}

console.log(task);

// здесь идет отправка нового таска в акцию в store/ а через акцию в мутацию хранилища, которая изменит данные в хранилище
this.$store.dispatch('newTask', task)

this.taskId =''
this.taskTitle=''
this.taskDescription=''

            }
        }
   }
</script>
  
<style	lang="sass" scoped>
.task-list
    
.task-item
    border: .1rem solid #f5f5f5
    min-width: 10rem
    margin: 0 2rem  0  0
    padding: 1rem
    display: flex	
    justify-content: space-between
    p   
        font-size: 1rem
        font-family: Poppins, sans-serif
.task-button
    margin: 1rem
.input-field
    border: .2rem solid blue
    width: 10rem
    
.task-input
    label
        font-size: 1rem
        font-family: Poppins, sans-serif
        padding: 0 1rem	
</style>