<template>

<div>
    <!-- <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel> -->

<button class=" btn btn-primary my-3" @click="showNext()">show me the next</button>
<button class=" btn btn-success my-3" @click="showPrev()">show me the prev</button>
<button class=" btn btn-danger my-3" @click="play()">play</button>
<VueSlickCarousel v-bind="settings"   ref="carousel">
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  <div class="slick-item">
  <img src="https://picsum.photos/300/300" />
  </div>
  
 

</VueSlickCarousel>


  </div>


</template>
  
<script>

 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



export default {
 name: 'MyComponent',
    components: { VueSlickCarousel },

  data() {
    return {
    settings:{
 "dots": true,
  "focusOnSelect": true,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 5,
  // "fade": true,
  // "lazyLoad": "ondemand",
 
},
      }
    },
  methods: {
      showNext() {
        this.$refs.carousel.next()
    },
    showPrev(){
      this.$refs.carousel.prev()
    },
    play(){
      this.$refs.carousel.play()
    }
    }
  }
</script>
  
<style	lang="css" >
  .slick-item:nth-child(1){
    border: 1px solid red;
  }
  .slick-slider{

  }
</style>