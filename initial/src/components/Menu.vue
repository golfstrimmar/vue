<template>
  <div>
    <nav>
      <transition name="fade" mode="out-in">
      <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu" >Menu</i> 
      <i class="material-icons clear" v-else @click="show = !show" key="clear"	>Clear</i>  
      </transition>
      <transition name="fade" >
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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
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
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
nav{
  
}
</style>

<script>
export default {
  data(){
    return{
      items:[
        'Home',
        'About',
        'Team',
        'Works',
        'Contacts',
      ]
    }
  },
  show: false,
}
</script>