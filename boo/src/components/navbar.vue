<template>
  <div class="contaner">
    <!-- https://bootstrap-vue.org/docs/components/navbar -->
    <b-navbar toggleable="md" type="light" variant="success" fixed="top">
      <b-navbar-brand href="#"><img src="https://placekitten.com/g/40/40" alt="Kitten"></b-navbar-brand>

<!-- здесь просто взял блок иконок с другого навбара -->
<!-- https://bootstrap-vue.org/docs/components/navbar#b-navbar-toggle-and-b-collapse-is-nav -->
    <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <span class="icomoon icon-cross" v-if="expanded"></span>
          <span class="icomoon icon-menu" v-else></span>
        </template>
    </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- https://bootstrap-vue.org/docs/components/navbar -->

        <b-navbar-nav justified class="col-lg-8">

          <router-link
           tag="b-nav-item" 
           to="/" 
           active-class="active"
            >
            <span @click="show = !show"> Home</span>
            </router-link
          >

          <b-nav-item-dropdown text="Methods" right active-class="active">
            <router-link
              tag="b-dropdown-item"
              :to="{ name: 'counters' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show"> Counters</span>
              </router-link
            >

            <router-link
              tag="b-dropdown-item"
              :to="{ name: 'clickButtons' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">СlickButtons</span>
              </router-link
            >
           
          
           
            
             <router-link
              tag="b-dropdown-item"
              :to="{ name: 'formElements' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">FormElements</span>
              </router-link
            >
            
                                                        
            <!-- <b-dropdown-item  href = "#" > form elements </b-dropdown-item >  -->
          </b-nav-item-dropdown>
          <router-link
              tag="b-nav-item"
              :to="{ name: 'computed' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">Computed</span>
              </router-link
            >
          <router-link
              tag="b-nav-item"
              :to="{ name: 'trans' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">Transitions</span>
              </router-link
            >
            
             <router-link
              tag="b-nav-item"
              :to="{ name: 'componentsActions' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">ComponentsActions</span>
              </router-link
            >
          <router-link
              tag="b-nav-item"
              :to="{ name: 'different' }"
              active-class="active"
              @click="show = !show"
              >
              <span @click="show = !show">Разное</span>
              </router-link
            >
         
         
          <router-link
            tag="b-nav-item"
            :to="{ name: 'about' }"
            active-class="active"
            @click="show = !show"
            >
            <span @click="show = !show">About</span>
            </router-link
          >
          <router-link
           tag="b-nav-item" 
           :to="'/contacts'"
            active-class="active"
            @click="show = !show"
            >
            <span @click="show = !show">Contacts</span>
            </router-link
          >
          <router-link
            tag="b-nav-item"
            :to="{ name: 'posts' }"
            active-class="active"
            @click="show = !show"
            >
            <span @click="show = !show">Posts</span>
            </router-link
          >
          <!-- вывод единичного поста -->
          <router-link 
          tag="b-nav-item"
           to="/post/4" 
           active-class="active"
           @click="show = !show"
            >
            <span @click="show = !show">Posts-4</span>
            </router-link
          >
          <router-link 
          tag="b-nav-item"
           to="/post/7" 
           active-class="active"
           @click="show = !show"
            >
            <span @click="show = !show">Posts-7</span>
            </router-link
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
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
     updateWidth() {
    this.width = window.innerWidth;
     if (this.width < 768) {
                // this.show = true

            // }else{this.show = true}
            // console.log(this.show)
            // return this.show
            }
  },
     updateWidthClose() {
    this.width = window.innerWidth;
     if (this.width < 768) {
                this.show1 = false
                // this.show1 = true
                this.show = true
                // this.show = false
                if(this.show= false){
                  this.show1=!this.show1  
                }
            }
            
            console.log("show1---"+this.show1)
            console.log("show---"+this.show)
            return this.show1
  }
},
created() {
  window.addEventListener('resize', this.updateWidth);
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
  border: 1px solid purple !important;
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
/* -------------------------------------------------- */

.navbar-toggler{
  font-size: 1rem;
}


</style>
