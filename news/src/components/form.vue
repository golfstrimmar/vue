<template>
    <div class="container">

<div class="text-danger">class</div>

        <b-button title="Save file" class="w-100 mb-3">  
          <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
        </b-button>



<b-icon icon="tools"  animation="throb"></b-icon>
<b-icon-person-fill animation="cylon"/> 

<b-icon-alarm 
font-scale="3" 
variant="primary"
animation="spin"
 />
 

  <div style="font-size: 4rem;" class="mb-3">
    <b-icon icon="camera"></b-icon>
    <b-icon icon="camera" rotate="45" variant="danger"></b-icon>
    <b-icon icon="camera" rotate="90"></b-icon>
    <b-icon icon="camera" rotate="180"></b-icon>
    <b-icon icon="camera" rotate="270"></b-icon>
    <b-icon icon="camera" rotate="-45" variant="info"></b-icon>
  </div>
 
 <div>

   <!-- https://bootstrap-vue.org/docs/components/form-rating -->
    <b-form-rating v-model="value" variant="success" stars="15"/>
    <p class="mt-2">Value: {{ value }}</p>
  </div>



  <b-form-textarea
    id="textarea-no-resize"
    placeholder="Fixed height textarea"
    rows="3"
    no-resize
  ></b-form-textarea>


<hr>
   <b-form-group
      class="mb-0"
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
   
    <p><b>Value:</b> {{ text1 }}</p>

    <b-form-group
      class="mb-0"
      label="Text input with lazy formatter (on blur)"
      label-for="input-lazy"
      description="This one is a little lazy!"
    >
      
      <b-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="Enter your name"
        lazy-formatter
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
   
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
  </div><!-- container -->

</template>
  
<script>
  export default {
    data() {
      return {
        text1: '',
        text2: '',
         value: "3"
      }
    },
    methods: {
      formatter(value) {
        return value.toLowerCase()
      }
    }
    }
</script>
  
<style	lang="css" scoped>
  
</style>