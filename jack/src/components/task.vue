<template lang="pug">
v-container
  h1 tasks
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
    }),  components: {    },  mounted() {     },  methods: {      },  computed:{      }
};
</script>

<style scoped></style>
