<template>
    <div class="container">
        <h1>bootstrap-vue</h1>
        <div class="mt-5"></div>

    <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>


  <b-card-group  deck class="my-3 row no-gutters">
   
    <b-card
     :title="card.title"
     img-alt="Image" 
     img-top
     v-for="(card , index)  in cards"  
     :key="index"
     :img-src='card.url'
     bg-variant="primary"
     >
    
      <b-card-text>
       {{card.text}}
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

  </b-card-group>
</div>



<!-- <Plyr></Plyr> -->
    <!-- <Form></Form> -->
</template>
  
<script>
// import Plyr from '@/components/plyr'
// import Form from '@/components/form'
export default {
  data: () => ({
     cards: [
{
  title:"title1",
  url: 'https://picsum.photos/300/300/?image=41',
  text:" This card has even longer content than the first to show that equal height action.",
  
},
{
   title:"title2",
  url: 'https://picsum.photos/300/300/?image=41',
  text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
},
{
   title:"title3",
  url: 'https://picsum.photos/300/300/?image=41',
  text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
},
{
   title:"title2",
  url: 'https://picsum.photos/300/300/?image=41',
  text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
},
{
   title:"title2",
  url: 'https://picsum.photos/300/300/?image=41',
  text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
},
{
   title:"title2",
  url: 'https://picsum.photos/300/300/?image=41',
  text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
},


     ]
  
  }),
  components: {
    // Plyr,
    // Form
  }
  }
</script>
  
<style	lang="css" scoped>
  
</style>