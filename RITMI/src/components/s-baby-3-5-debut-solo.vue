<template lang="pug">
li#bs5.akr__item.akr-item
            .akr-item__title(
              @click="changeVisible"
              :class="[areOptionsVisible ? 'akr-item__title--active' : '']"
              ) {{selected1}}
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
                        v-for= 'option in options'
                        :key = 'option.value'
                        ) 
                        p {{option.title}}
                        p {{option.subtitle}}
                        p {{option.club}}
                        p {{option.coach}}
                        p {{option.town}}
</template>

<script>


export default {
  name: 'S_baby_3_5_debut_solo',
  data(){
    return{
      areOptionsVisible: false
    }
  },
  props: {
  options:{
      type: Array,
      default(){
        return []
      } 
    },
  selected1:{
      type: String,
      default(){
        return []
      }
    }
  },
  methods: {
changeVisible(){
return this.areOptionsVisible = !this.areOptionsVisible;
},

hideSelect(){
let menu = document.querySelector('.akr-item__title');
document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  
  if (!its_menu) {
   return this.areOptionsVisible = false;
  }
})
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




  
<style>
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
.list{
  padding: 1rem 0	
}

</style>