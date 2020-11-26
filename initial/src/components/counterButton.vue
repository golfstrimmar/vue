<template>
    <div class="container">
      <div class="row ">

        <slot name="title"></slot><!-- добавляет html в главном шаблоне работает как триггер -->
       <div class="w-100"></div>
        <h1>{{countcount}}</h1>
       <div class="w-100"></div>
        <slot name="description"></slot>

      </div>
    </div>
</template>
  
<script>
// здесь импортируется новыйы экземпляр vue через константу из maim.js
import {eventEmiter} from '../main'

export default {
  data() {
    return {
    countcount:0,
    
      }
    },
  methods: {
  
    },
    mounted(){
      // здесь принимается событие changeCounter от другого компонента через eventEmiter
      // count это параметр который приходит из другого компонента. это шаг
eventEmiter.$on(
  'changeCounter',count => {this.countcount += count}
)
    }
  }
</script>
  
<style	lang="css" scoped>
  
</style>