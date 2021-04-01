<template lang="pug">

.app-main-layout
  Navbar(@click="isOpen=!isOpen")
  Sidebar(
    v-model="isOpen"
  )
  main.app-content(:class="{full: !isOpen}")
    .app-page
      .wrapper
        section.content
          router-view 




          
</template>


<script>

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default {
   data: () => ({
     isOpen: true,
   }),
     components: { Navbar,Sidebar   },
       mounted() {     }, 
        methods: { 
            },  computed:{      }
    }
</script>
  
<style	lang="sass" scoped>
  
</style>