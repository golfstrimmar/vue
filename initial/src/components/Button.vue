<template>
<!-- этот компонент оттает событие -->
    <div class="container">
      <div class="row ">
  
        <button class="btn btn-success" @click="addButton() ">Добавить</button>
      </div>
    </div>
</template>
  
<script>
// здесь импортируется новыйы экземпляр vue через константу из maim.js
import {eventEmiter} from '../main'

export default {
  methods: {
    // здесь пписывается событие вызываемый при клике на кнопку. событие такое же как клик
    // changeCounter заберет через eventEmiter  другой компонент counterButton
  addButton(){
    // 5 это шаг
eventEmiter.$emit('changeCounter', 5)
  }
    },
  }
</script>
  
<style	lang="css" scoped>
  
</style>