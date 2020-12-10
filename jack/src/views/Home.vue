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
      
                  //-  // TOTAL TIME
      .total-time
        v-card.pa-5.my-4(elevation='8')
          v-list-item(three-line='' v-if="whatWatch === 'Film'")
            .overline
              | Total Film Times
            v-col( cols="1")
              v-text-field.ml-4(  label='Hours' type='number' required v-model="filmHours")
            v-col( cols="1")
              v-text-field.ml-4(  label='Minutes' type='number' required v-model="filmMinutes")
          v-list-item(three-line='' v-if="whatWatch === 'Serial'")
            .overline
              | Total Serial Times
            v-col( cols="1")
              v-text-field.ml-4(  label='How many season?' type='number' required v-model="filmHours")
            v-col( cols="1")
              v-text-field.ml-4(  label='How many series?' type='number' required v-model="filmMinutes")
            v-col( cols="4")
              v-text-field.ml-4(  label='How long is one series? (minutes)' type='number' required v-model="filmMinutes")
      
      
      
        
      //- .total-time
      //-   //- // Film Time
      //-   .total-time__film(
      //-     v-if="whatWatch === 'Film'"
      //-     )
      //-     span Total Film Times
      //-     span.time-title Hours
      //-     input.time-input(
      //-       type="number"
      //-       v-model="filmHours"
      //-     )
      //-     span.time-title Minutes
      //-     input.time-input(
      //-       type="number"
      //-       v-model="filmMinutes"
      //-     )
      //-     //- p {{ filmTime }}
        
        
      //-   //- // Serial Time
      //-   .total-time__serial(
      //-     v-if="whatWatch === 'Serial'"
      //-     )
      //-     span Total Serial Times
      //-     .ui-tag
      //-       span.tag-title Dogs
      //-       span.button-close
      //-       span.time-title How many season?
      //-       input.time-input(
      //-         type="number"
      //-         v-model="serialSeason"
      //-       )
      //-       span.time-title How many series?
      //-       input.time-input(
      //-         type="number"
      //-         v-model="serialSeries"
      //-       )
      //-       span.time-title How long is one series? (minutes)
      //-       input.time-input(
      //-         type="number"
      //-         v-model="serialSeriesMinutes"
      //-       )
      
      
      v-chip.my-2(v-if='chip2' close='' color='red' text-color='white' @click:close='chip2 = false' )
        | Dogs
      
 
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

    // Total Time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,
  
  }),
  components: {},
  mounted() {},
  methods: {
     getHoursAndMinutes (minutes) {
      let hours = Math.trunc(minutes / 60)
      let min = minutes % 60
      return hours + ' Hours ' + min + ' Minutes'
    },
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
