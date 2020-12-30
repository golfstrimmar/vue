<template lang="pug">

v-container
    v-col.mx-auto( cols="8")
      h1 cards
      v-card.pa-5.my-4(elevation='8' 
       v-for="( card, index)  in cards"  :key="index"
       v-if="!card.completed"
       )
        v-icon.float-right(
          @click="usedCard(card)"
          ) mdi-close
        h3.mt-3 {{card.title}}
        v-card-text() {{card.description}}

</template>

<script>

export default {
   data: () => ({
     Show: true
  }),
  methods: {
 usedCard(card){
return card.completed = true
 }
  },
  computed: {
cards(){
  return this.$store.getters.cards
}
  },
};
</script>

<style lang="sass">
.text 
  text-align: left

.v-banner__wrapper 
  border: none !important 

.v-messages
  display: none


</style>
