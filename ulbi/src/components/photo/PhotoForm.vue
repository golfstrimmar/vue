<template lang="pug">
v-container
  v-row
    v-text-field(
      label='Введите заголовок фотографии'
      v-model="title"
      )
    v-file-input(
      v-model='img'
      )
    v-btn(@click="addPhoto()") Добавить
</template>

 <script>
export default {
  data: () => ({
    title: "",
    img: null,
  }),
 
  methods: {
    addPhoto() {
      // объект Java Script
      const reader = new FileReader();

      // слушатель js который отрабатывает в момент прочтения изображения
      reader.onload = () => {
        // внутри функции создается объект
        let photo = {
          // уникальный ID получается из текущего времени
          id: Date.now(),

          // заголовок из модели инпута
          title: this.title,

          // в url передаётся результат работы reader
          url: reader.result,
        }

      this.$emit("addPhoto", photo);
      }
    
      reader.readAsDataURL(this.img);
    },
  },
};
</script>

<style lang="sass">
</style>
