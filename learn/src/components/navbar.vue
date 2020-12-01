<template>
   <b-container>
  <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">


<router-link
 tag="b-navbar-brand"
       active-class="active"
        to="/"
       style="cursor: pointer"
>
          <h3>Learn Project</h3>

</router-link>
        

<!-- здесь просто взял блок иконок с другого навбара -->
<!-- https://bootstrap-vue.org/docs/components/navbar#b-navbar-toggle-and-b-collapse-is-nav -->
    <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <span class="icomoon icon-cross" v-if="expanded"></span>
          <span class="icomoon icon-menu" v-else></span>
        </template>
    </b-navbar-toggle>


      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav 
        fill 
         class="col-lg-10 row no-gutters justify-content-end ml-auto">
        
      <router-link
      tag="b-nav-item"
       variant="outline-primary"
       v-for="( item, index)  in menuItems"
       active-class="active"
        :key="index"
        :to="item.route"
       >  
        <b-icon  :icon = "item.icon"> </b-icon> 
      {{item.title}}
      </router-link>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


<!-- содержимое страницы -->
    <router-view></router-view>

</b-container>
</template>
  
<script>
export default {
  
  data() {
    return {
  
      }
    },
  methods: {
  
    },
    computed:{
      menuItems(){
        return [
          {
            route: "/",
          },
          {
            icon: 'eye',
            title: "Читать",
            route: "/books",
          },
          {
            icon: 'book',
            title: "Учить слова",
            route: "/words",
          },
          {
            icon: 'person-fill',
            title: "Мой кабинет",
            route: "/profile",
          },
          // {
          //   icon: 'box-arrow-right',
          //   title: "Выйти",
          //   route: "/signout",
          // },
          {
            icon: 'box-arrow-in-right',
            title: "Войти",
            route: "/signin",
          },
          {
            icon: 'unlock',
            title: "Зарегистрироваться",
            route: "/signup",
          },
        ]
      }
    }
  }
</script>
  
<style	lang="css">

.btn-outline-primary{
  color: white;
  border: none;
  transition: all 0.2s ease-in-out;
  height: 100%;
}
.btn-outline-primary:focus{
  box-shadow: none;
  color: #87CEEB;
}

  /* ------------------------------------------------------------------- */
.navbar-nav {
  /* border: 1px solid purple !important; */
  padding: 0 0 0 0;	
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

.nav-link {
    color: rgba(255, 255, 255, 1)!important;
    transition: all 0.3s ease-in-out;
}

.active .nav-link{
   color:blue!important;
}

/* -------------------------------------------------- */

.navbar-toggler{
  font-size: 1rem;
}
</style>