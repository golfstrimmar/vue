<template>
  <div class="container">

    <div class="devider-title">раздел css</div> 
<!-- ------------------------------- -->
<h5>{{title}}</h5>
<button class="btn btn-primary" 
:class="[sizeToggle ? 'large' : '']"
:style="styles"
:disabled="disabled"

>start</button>
<ul>
  <li>
    <input type="checkbox" v-model="sizeToggle" id="large">&nbsp;
    <label for="large"> Увеличить шрифт</label>
  </li> 
  <li>
    <input type="checkbox" v-model="disabled" id="disabled">&nbsp;
    <label for="disabled"> disabled</label>
  </li> 
  <li class="mb-2">
    <input type="text" v-model="fontColor">
  </li> 
  <li class="mb-2">
    <input type="text" v-model="backgroundColor">
  </li> 
  
</ul>
<hr>
  </div>
</template>


<script>
export default {
data(){
 return {
sizeToggle: false,
disabled:false,
fontColor:"",
backgroundColor:"",
 }
 },

computed: {
  styles(){
    return{
    color: this.fontColor,
    background: this.backgroundColor,
    }
  }
}

}
</script>



<style lang="css" scoped>
   .large{
    font-size: 30px;
  }
</style>