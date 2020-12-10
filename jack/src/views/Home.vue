<template lang="pug">
v-container
  v-row
    v-col.mx-auto( cols="8")
      h1 Home

      v-text-field(
        label='What will we watch?' 
        elevation='8' 
        hide-details='auto'
        v-model="taskTitle"
        @keyup.enter="NewTask()"
        )
      v-textarea(
        label='Description' 
        v-model="taskDescription"
        @keyup.enter="NewTask()"
        )
      
      v-radio-group(v-model="whatWatch"  row)
        v-radio( label='Film' value='Film' )
        v-radio( label='Serial' value='Serial' )
      
      //- .d-flex.align-center
      //-   input(type="radio" id="Film" value='Film' name="choice" v-model="whatWatch")
      //-   label(for="Film") Film
      //-   input(type="radio" id="Serial" value='Serial' name="choice" v-model="whatWatch")
      //-   label(for="Serial") Serial
      
      
      
      h3.text(
        v-if="whatWatch === 'Film'"
        )
        |Total film tmes
      h3.text(v-if="whatWatch === 'Serial'")
        |Total serial tmes
      v-chip.my-2(v-if='chip2' close='' color='red' text-color='white' @click:close='chip2 = false' )
        | Dogs
      
      v-card.pa-5.my-4(elevation='8' 
       v-for="( task, index)  in tasks"  :key="index"
       :class="[task.completed ? 'completed' : '']"
       )
        v-icon.float-right mdi-close
        .d-flex.align-center
          v-chip(label='') {{task.whatWatch}}
          .text-subtitle-2.ml-3 Total time
        .d-flex.align-center
          v-checkbox(  v-model="task.completed")
          h3.mt-3 {{task.title}}
        v-banner(  transition='slide-y-transition') {{task.description}}
         
         
 
</template>

<script>
export default {
  data: () => ({
    row: "",
    chip2: true,
    taskTitle: "",
    taskDescription: "",
    whatWatch: "Film",
    taskId: 3,
    tasks: [
      {
        id: 1,
        title: "GrowthBusters: Hooked on Growth",
        description:
          "I directed this documentary challenging the myths linking growth with prosperity and fulfillment. It explores how our beliefs about economic and consumption",
        whatWatch: "Film",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "Game of thrones",
        description: "Best serials",
        whatWatch: "Serial",
        completed: false,
        editing: false,
      },
    ],
  }),
  components: {},
  mounted() {},
  methods: {
    NewTask(){
      if (this.taskTitle === '') {
        return
      }
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false,
        
      })
      // console.log(this.whatWatch)
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
