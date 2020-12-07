<template lang="pug">
v-container(grid-list-md text-xs-center fluid)
  v-layout(row wrap)
    
    
    v-flex(xs12)
      v-card(dark color='teal accent-4')
        v-card-text.px-0 занимает всю ширину
    v-flex(v-for='i in 2' :key='`6${i}`' xs6 )
      v-card(dark color='light-blue accent-2')
        v-card-text.px-0 1/2
    v-flex(v-for='i in 3' :key='`4${i}`' xs4)
      v-card(dark color='orange darken-3')
        v-card-text.px-0 1/3
    v-flex(v-for='i in 4' :key='`3${i}`' xs3)
      v-card(dark color='amber accent-4')
        v-card-text.px-0 1/4
    v-flex(v-for='i in 6' :key='`2${i}`' xs2)
      v-card(dark color='primary')
        v-card-text.px-0 1/6
    v-flex(v-for='i in 12' :key='`1${i}`' xs1)
      v-card(dark color='green accent-2')
        v-card-text.px-0 1/12

  v-layout(row='')
    v-flex(grow='' pa-1='')
      v-card(dark='' color='green darken-3')
        v-card-text #1 Im a Grow Flex
    v-flex(shrink='' pa-1='')
      v-card(dark='' color='green darken-1')
        v-card-text #2 Im a Shrink Flex
  
  v-layout(row='' pa-1)
    v-flex(grow='' )
      v-card(dark='' color='green darken-1')
        v-card-text #1 Im a Grow Flex
    v-flex(shrink='' )
      v-card(dark='' color='green lighten-1')
        v-card-text #2 Im a Shrink Flex
    v-flex(grow='' )
      v-card(dark='' color='green darken-4')
        v-card-text #3 Im a Grow Flex
 
  v-layout(row='')
    v-flex(shrink='' pa-1='')
      v-card(dark='' color='green darken-3')
        v-card-text #1 Im a Shrink Flex
    v-flex(grow='' pa-1='')
      v-card(dark='' color='green')
        v-card-text #2 Im a Grow Flex
    v-flex(shrink='' pa-1='')
      v-card(dark='' color='green lighten-1')
        v-card-text #3 Im a Shrink Flex


</template>
<script>
  export default {
   

  }
</script>

<style scoped>

</style>
