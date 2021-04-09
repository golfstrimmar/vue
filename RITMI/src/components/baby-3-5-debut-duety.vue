<template lang="pug">

li#bs5.akr__item.akr-item
              .akr-item__title(
                @click="changeVisible"
                :class="[areOptionsVisible ? 'akr-item__title--active' : '']"
                ) Бэби 3-5 лет дебют дуэты (w,ch)
                i.icon-chevron-down.akr-item__img.akr-item-img-js(:class="[areOptionsVisible ? 'act' : '']")
              transition(name="slide")  
                .akr__drop.akr-drop.akr-drop-js(
                  v-show="areOptionsVisible"
                  )
                    .list
                      .list__header
                          .list__item Партнер
                          .list__item Партнерша
                          .list__item Клуб
                          .list__item Фамилия тренера
                          .list__item Город
                      .akr-item__line.line(
                         v-for="option in options" :key="option.index"
                          ) 
                        p {{option.username_1}} {{option.surusername_1}}
                        p {{option.username_2}} {{option.surusername_2}}
                        p {{option.club}}
                        p {{option.coach}}
                        p {{option.town}}
</template>

<script>


export default {
  name: 'baby_3_5_debut_duety',
  data(){
    return{
      areOptionsVisible: false
    }
  },

computed: {
  options() {
    return this.$store.getters.options1
    }
},

methods: {
changeVisible(){
  
return this.areOptionsVisible = !this.areOptionsVisible;
},

// hideSelect(){
// let menu = document.querySelector('.akr-item__title');
// document.addEventListener('click', e => {
//   let target = e.target;
//   let its_menu = target == menu || menu.contains(target);
  
//   if (!its_menu) {
//    return this.areOptionsVisible = false;
//   }
// })
// }

  },
  mounted(){
// document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy(){
// document.removeEventListener('click', this.hideSelect.bind(this))
  }
    }
</script>




  
<style>

</style>