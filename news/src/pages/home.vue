<template>
  <div class="container">
      <h1>home</h1>
      <div class="mb-5"></div>
<Form></Form>
      <div class="mb-5"></div>
<Vuetify></Vuetify>
      <div class="mb-5"></div>
<VueSlickCarousel></VueSlickCarousel>
      <div class="mb-5"></div>
      <Modal></Modal>
      <div class="mb-5"></div>
      <Plyr></Plyr>
      <div class="mb-5"></div>
      <Slider></Slider>
      <div class="mb-5"></div>
    </div>
</template>

<script>
import Slider from "@/components/slider";
import Plyr from "@/components/plyr";
import Modal from "@/components/modal";
import VueSlickCarousel from "@/components/slick";
import Vuetify from "@/components/vuetify";
import Form from "@/components/form";
export default {
  components: {
    // Form,
    // Navbar,
    Slider,
    Plyr,
    Modal,
    VueSlickCarousel,
    Vuetify,
    Form
  }
};
</script>

<style lang="css" scoped></style>
