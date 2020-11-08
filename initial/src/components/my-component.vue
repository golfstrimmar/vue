<template>
  <div class="root">
   <div class="item">
    <input id="yushinbox" 
    type="email" 
    :value="email"
    @input="emailInput"
    > 
    <label for="yushinbox">
Введите email
    </label>
    </div> 
    <br>
    
    <label for="yushinbox1">
Введите пароль
    </label>
 <input id="yushinbox1" type="password" :value="password"> 

  </div>
</template> 

<script>
export default {
  name: 'Mycomponent',
  data(){
    return{
      text:"Hello!!!", 
      email:"yushinbox@gmail.com",
      password:"123456i"
    }
  },
  methods:{
    emailInput(event){
this.email = event.target.value
    }
  }
}
</script>

<style >
.item  #yushinbox,#yushinbox1{
background: blue;
margin: 30px 0 0 10px;	
text-align: left;
  }

 #yushinbox + label{
   color: coral; 
 }
.item{
   direction: rtl;
}

input:focus{
  background: cyan!important;
}
input:focus::-webkit-input-placeholder {color: transparent}

</style>