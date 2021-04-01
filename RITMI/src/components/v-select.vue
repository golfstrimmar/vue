<template lang="pug">
.v-select
  p(@click="areOptionsVisible = !areOptionsVisible") {{selected}}
  transition(name="slide")
      .options(v-if="areOptionsVisible")
        p(
          v-for= 'option in options'
          :key = 'option.value'
          @click = 'selectOption(option)'
        ) {{option.title}}
</template>
  
<script>
export default {
  name: 'v-select',
  data(){
    return{
areOptionsVisible :false

    }
  },
  props: {
    options:{
      type: Array,
      default(){
        return []
      } 
    },
    selected:{
      type: String,
      default(){
        return []
      }
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select',  option)
     return this.areOptionsVisible = false
    },
    hideSelect(){
      return this.areOptionsVisible = false;
    }
  },
  mounted(){
document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy(){
document.removeEventListener('click', this.hideSelect.bind(this))
  }
    }
</script>
  
<style	lang="sass" scoped>
  
</style>



// делаем пропсу options/ и передаем ее из родителя
// перебираем эте пропсу по ключу value в теге p   v-for= 'option in options'
                                                    // :key = 'option.value'
// делаем скрытие-показ селекта через .options(v-if="areOptionsVisible")
                                      // data(){
                                      //     return{
                                      // areOptionsVisible :false
                                      //     }
                                      //   },

// по клику делаем инверсию открывающей переменной p(@click="areOptionsVisible = !areOptionsVisible") select
// по клику делаем функцию в которую передаем всю опцию @click = 'selectOption(option)'
// проталкиваем option наверх в родителя
//  methods:{
    // selectOption(option){
      // this.$emit('select',  option)
    // }
  // }
// 
// дальше приходит пропса из родителя
//  selected:{
//       type: String,
//       default(){
//         return []
//       }
//     }
// выводим ее где нужно
//  p(
//       v-for= 'option in options'
//       :key = 'option.value'
//       @click = 'selectOption(option)'
//     ) {{option.title}}


// для закрытия селекта по клику вне
// делаем метод
//     hideSelect(){
//       return this.areOptionsVisible = false;
//     }

// делаем хуки
//   mounted(){
// document.addEventListener('click', this.hideSelect.bind(this), true)
//   },
//   beforeDestroy(){
// document.removeEventListener('click', this.hideSelect.bind(this))
//   }












