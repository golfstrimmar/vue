<template>
    <div class="container">
      <div>
  <b-button v-b-modal.modal-center>Launch centered modal</b-button>
  <b-modal id="modal-center" centered title="plyr">
  <vue-plyr>
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    ></iframe>
  </div>
</vue-plyr>
  </b-modal>
</div>
    </div>
</template>
  
<script>
export default {
 
  }
</script>
  
<style	lang="css" >
  .modal-backdrop {
    opacity: 0.9;
}
</style>