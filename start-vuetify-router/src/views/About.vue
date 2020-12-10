<template lang="pug">

v-container
  v-row
    v-col.mx-auto( cols="8")
      h1 Home

      v-text-field(
        label='заголовок' 
        elevation='8' 
        hide-details='auto'
        v-model="taskTitle"
        @keyup.enter="NewTask()"
        )
      v-textarea(
        label='описание' 
        v-model="taskDescription"
        @keyup.enter="NewTask()"
        )
      v-card.pa-5.my-4(elevation='8' 
       v-for="( task, index)  in tasks"  :key="index"
       :class="[task.completed ? 'completed' : '']"
       )
        v-icon.float-right mdi-close
        h3.mt-3 {{task.title}}
        v-banner(  transition='slide-y-transition') {{task.description}}

</template>

<script>

export default {
   data: () => ({
    taskTitle: "",
    taskDescription: "",
    taskId: 3,
    tasks: [
      {
        id: 1,
        title: "Заголовок 1",
        description: "описание 1",
        completed: false,
      }
    ],
  }),
  methods: {
    NewTask(){
      if (this.taskTitle === '') {
        return
      }
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        completed: false,
      })
      console.log(this.whatWatch)
      // Reset
      this.taskId += 1
      this.taskTitle = ''
      this.taskDescription = ''
    }
  },
  computed: {},
};
</script>

<style lang="scss">
.text {
  text-align: left;
}
.v-banner__wrapper {
  border: none !important ;
}
.v-messages{
  display: none;
}

</style>
