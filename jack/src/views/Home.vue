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
          v-list-item( v-if="whatWatch === 'Film'")
            v-row
              v-col( cols="2")
                .overline Total Film Times
              v-col( cols="1")
                v-text-field.ml-4(  label='Hours' type='number' required v-model="filmHours")
              v-col( cols="1")
                v-text-field.ml-4(  label='Minutes' type='number' required v-model="filmMinutes")
              v-col( cols="12")
                .overline {{ filmTime }}
          v-list-item(three-line='' v-if="whatWatch === 'Serial'")
            v-row
              v-col( cols="2")
                .overline Total Serial Times
              v-col( cols="1")
                v-text-field.ml-4(  label='How many season?' type='number' required v-model="filmHours")
              v-col( cols="1")
                v-text-field.ml-4(  label='How many series?' type='number' required v-model="filmMinutes")
              v-col( cols="4")
                v-text-field.ml-4(  label='How long is one series? (minutes)' type='number' required v-model="filmMinutes")
              v-col( cols="12")
                .overline {{ serialTime }}
      
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
  computed: {
    filmTime () {
      let min = (this.filmHours * 60) + (this.filmMinutes * 1)
      return this.getHoursAndMinutes(min)
    },
    serialTime () {
      let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
      return this.getHoursAndMinutes(min)
    }
  },
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
