<template lang="pug">
v-dialog(
  v-model='dialogVisible' 
  scrollable
  max-width="600"
  )
  v-card
    v-card-title {{full_title}}
    v-card-text
      v-img(
        width="600"
        height="600"
        :src="photo.url"
        )
</template>

<script>
  export default {
    // здесь props заходит из родителя. упрвление видимостью д.окна происходит тоже из родитея
    props:{
      photo:{
        type: Object,
        required: true
      },
      value:{
        type: Boolean,
        default: false
      }
    },
     data: () => ({ 
     dialogVisible: false
    }),
    created(){
      // присвоим то что прилетелo value
      this.dialogVisible = this.value
    },
    watch:{
// функция отрабатывает Каждый раз когда значение изменяется
      value(newValue){
        this.dialogVisible = newValue
      },
      dialogVisible(newValue){
        this.$emit('input',newValue)
    }
    },
    // вычисляемое свойство меняется только тогда когда меняются входящие параметры
    computed:{
full_title(){
  return 'Название фото'+" -->"+this.photo.title
}
    }

  }
</script>

<style lang="sass" scoped>

</style>