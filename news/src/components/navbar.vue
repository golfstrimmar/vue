<template>
  <div class="contaner">
    <b-navbar toggleable="md" type="light" variant="primary" fixed="top">
      <b-navbar-brand href="#">NEWS</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <span class="icomoon icon-cross" v-if="expanded"></span>
          <span class="icomoon icon-menu" v-else></span>
        </template>
    </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justified class="col-lg-12">
          <router-link
           tag="b-nav-item" 
           :to="item.route"
           active-class="active"
           v-for="( item, index)  in menuItems"
           :key="index"
            >
            <span @click="show = !show"><b-icon  :icon = "item.icon"> </b-icon> {{item.title}}</span>
            </router-link
          >
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  data() {
    return {
      show: true,
      show1: false,
      width: 0,

    }
  },
  methods: {
   
},

   computed:{
      menuItems(){
        return [
         
          {
            icon: 'eye',
            title: "Home",
            route: "/",
          },
          {
            icon: 'exclude',
            title: "About",
            route: "/name-about",
          },
          {
            icon: 'music-note-list',
            title: "computed",
            route: "/computed",
          },
         
         
        ]
      }
    },




created() {
},
}
</script>

<style lang="css">





.router-link-exact-active .nav-link {
  color: red !important;
  font-style: bold;
  transition: all 0.5s;
}

/* ------------------------------------------------------------------- */
.navbar-nav {
  /* border: 1px solid purple !important; */
  padding: 0 0 0 0;	
}

.navbar{
  box-shadow: 0px 6px 12px 0px #6495ED;
}
.show {
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
  min-height: auto !important;
}

.dropdown-menu {
  transition: all 0.3s ease-in-out;
  min-height: 0 !important;
  height: 0 !important;
  display: block !important;
  opacity: 0;
  visibility: hidden;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  /* border: none; */
}
/* делаем задержку на пункте меню на выпадающем списке*/
.nav-item > ul.show {
  transition: min-height .2s ease-in-out, height .2s ease-in-out, opacity .3s ease-in-out  !important;
  transition: all .3s ease-in-out;
  height: 300px !important;
  min-height: 300px !important;
  opacity: 1;
  visibility: visible;
}

.navbar-nav .show .nav-link span {
  transition: all 0.5s;
  color: red;
  
}

.nav-link:after {
  transition: all 0.3s ease-in-out;
  transform: rotate(0deg);
}

.navbar-nav .show .nav-link:after {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
  color: red;
}
.dropdown-item {
  transition: all 0.3s ease-in-out;
}
.dropdown-item:hover {
  color: red;
}
/* -------------------------------------------------- */

.navbar-toggler{
  font-size: 1rem;
}


</style>
