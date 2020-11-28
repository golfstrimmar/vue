<template>
  <div class="container">
      <h1>home</h1>
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
export default {
  components: {
    // Form,
    // Navbar,
    Slider,
    Plyr,
    Modal
  }
};
</script>

<style lang="css" scoped></style>
