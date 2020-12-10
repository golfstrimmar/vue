<template>
  <div>
    <nav>
      <transition name="fade" mode="out-in">
      <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu" >menu</i>  
      <i class="material-icons clear" v-else @click="show = !show" key="clear"	>clear</i>  
      </transition>
      <transition name="fade1" >
      <ul v-if="show"> 
       <li v-for="item in items"  :key="item">
{{item}}
       </li>
     </ul> 
      </transition>
    </nav>
  </div>
</template>

<style >

.material-icons {
    font-size: 24px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}	



  /* @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}		 */
body{
  /* display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
}
*{
  box-sizing: border-box;
}		
nav{
  background:rgba(255,188,140, .6);
}
</style>

<script>
export default {
  data(){
    return{
    show: false,
      items:[
        'Home',
        'About',
        'Team',
        'Works',
        'Contacts',
      ]
  }
}
}
</script>