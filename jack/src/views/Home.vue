<template lang="pug">
v-container
  v-row
    v-col.mx-auto( cols="8"
    @keyup.enter="NewTask()"
    )
      h1 Home

      v-text-field(
        label='What will we watch?' 
        elevation='8' 
        hide-details='auto'
        v-model="taskTitle"
        
        )
      v-textarea(
        label='Description' 
        v-model="taskDescription"
        
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
        //- Add new
      v-list-item
        .flex-column
          v-chip.my-2( close color='red' text-color='white' 
              :class="{usedRed: tagMenuShow}"
              @click="tagMenuShow=!tagMenuShow"
              ) Add new
          .d-flex.align-center( v-if="tagMenuShow"  )
            v-text-field(  label='New Tag' type='text' v-model="tagTitle" @keyup.enter="NewTag")
            v-btn.ml-4.pa-2(color="primary"  @click="NewTag()") Send
        //- tags
      v-list-item
        v-chip.mr-2(
          close color='cyan darken-4' text-color='white' 
          v-for="( tag, index)  in tags"  :key="index"
          @click="addTagUsed(tag)"
           :class="{used: tag.use}"
          ) {{tag.title}} 
      p {{tagsUsed}}
      v-chip.my-4(  color='indigo accent-3' text-color='white' label
        @click="NewTask()"
        ) 
        | Оправить новый task
</template>

<script>

export default {
  data: () => ({
    row: "",
    taskTitle: "",
    taskDescription: "",
    whatWatch: "Film",
    // taskId: 3,

    // Total Time
    // Film
    filmHours: 1,
    filmMinutes: 30,
    // Serial
    serialSeason: 1,
    serialSeries: 11,
    serialSeriesMinutes: 40,

    // Tags
    tagTitle: "",
    tagMenuShow: false,
    tagsUsed: [],
    // теперь не нужно так как берутся из хранилища см. tags.js
    // tags: [
    //   {
    //     title: "Comedy‎",
    //     use: false,
    //   },
    //   {
    //     title: "Westerns",
    //     use: false,
    //   },
    //   {
    //     title: "Adventure",
    //     use: false,
    //   },
    // ],
  }),
  components: {},
  mounted() {},
  methods: {
    getHoursAndMinutes(minutes) {
      let hours = Math.trunc(minutes / 60);
      let min = minutes % 60;
      return hours + " Hours " + min + " Minutes";
    },
    NewTask() {
      if (this.taskTitle === "") {
        return;
      }

      let time;
      if (this.whatWatch === "Film") {
        time = this.filmTime;
      } else {
        time = this.serialTime;
      }

      const task = {
        // id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        tags: this.tagsUsed,
        time: time,
        completed: false,
        editing: false,
      };
      // отправляем в хранилище данные с этой константы при помощи action
      this.$store.dispatch("newTask", task);
      console.log(task);
      // Reset
      // this.taskId += 1;
      this.taskTitle = "";
      this.taskDescription = "";
      this.tagsUsed = [];
      for (let i = 0; i < this.tags.length; i++) {
        this.tags[i].use = false;
      }
    },
    addTagUsed(tag) {
      tag.use = !tag.use;
      if (tag.use === true) {
        this.tagsUsed.push({
          title: tag.title,
        });
      } else {
        this.tagsUsed.find((item, index, arr) => {
          if (item.title === tag.title) {
            arr.splice(index, 1);
          }
        });
      }
    },

    NewTag() {
      if (this.tagTitle === "") {
        return;
      }
      // this.tags.push({
      //   title: this.tagTitle,
      //   used: false,
      // });

      const tag = {
        title: this.tagTitle,
        use: false,
      };
      this.tagTitle = "";
      this.tagMenuShow = !this.tagMenuShow;
      this.$store.dispatch("newTag", tag);
    },
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    filmTime() {
      let min = this.filmHours * 60 + this.filmMinutes * 1;
      return this.getHoursAndMinutes(min);
    },
    serialTime() {
      let min =
        this.serialSeason * this.serialSeries * this.serialSeriesMinutes;
      return this.getHoursAndMinutes(min);
    },
  },
};

</script>

<style lang="sass" >
@import "../assets/mixins.sass"

.text
  text-align: left
.v-banner__wrapper
  border: none !important
.v-messages
  display: none


.v-chip
  *
    transition: all 0.5s ease-in-out
.v-chip
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.2), 0px 3px 14px 2px rgba(0, 0, 0, 0.15) !important
  &.usedRed
    @extend %box-shadow
    background-color: lighten( $color_success, 30% ) !important
    .v-chip__content
      color: lighten( $color_success, 10% ) !important
    .mdi:before
      transition: all 0.5s ease-in-out
      transform:  rotate(1045deg)
      color: lighten( $color_success, 10% )
  &.used
    @extend %box-shadow
    background-color: lighten( $color_cyan, 40% ) !important
    .v-chip__content
      color: lighten( $color_cyan, 10% )
    .mdi:before
      transition: all 0.5s ease-in-out
      transform:  rotate(1045deg)
      color: lighten( $color_cyan, 10% )
</style>
