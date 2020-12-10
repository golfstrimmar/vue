<template lang="pug">
v-container
  v-list
    .d-flex.align-center.my-2
      h1 Tasks
      v-list.ml-10
        v-chip.mr-2( close color='red' text-color='white' 
          @click="filter = 'active'"
          :class="{usedRed: filter === 'active' }"
          ) Active
        v-chip.mr-2( close color='red' text-color='white' 
          @click="filter = 'complited'"
          :class="{usedRed: filter === 'complited' }"
          ) Complited
        v-chip( close color='red' text-color='white' 
          :class="{usedRed: filter === 'all' }"
          @click="filter = 'all'"
          ) All

  v-card.pa-5.my-4(elevation='8' 
    v-for="( task, index)  in tasksFilter"  :key="index"
     :class="[task.completed ? 'completed' : '']"
    )
    v-icon.float-right mdi-close
    .d-flex.align-center
      v-chip(label='') {{task.whatWatch}}
      .text-subtitle-2.ml-3 Total time: {{task.time}}
    .d-flex.align-center
      v-checkbox(  v-model="task.completed")
      h3.mt-3 {{task.title}}
    v-banner(  transition='slide-y-transition') {{task.description}}
    .task-item-footer
      v-list-item
        v-chip.mr-2(
          close color='cyan darken-4' text-color='white' 
          v-for="( tag, index)  in task.tags"  :key="index"
          ) {{tag.title}} 


</template>

<script>
export default {
   data: () => ({ 
     filter: "active"
    }),  components: {    },  mounted() {     },  methods: {      }, 
    computed:{   
tasksFilter(){
  if(this.filter === "active"){
return this.$store.getters.taskNotCompleted
  }else if (this.filter === "complited"){
return this.$store.getters.taskCompleted
  }else if (this.filter === "all"){
     // обращаемся к переменной store в ней к getters в котором уже есть tasks
  // системные переменные через $
  return this.$store.getters.tasks 
}

return  this.filter === "active"

},

      }
};
</script>

<style scoped></style>
