<template>
      <div class="contaner">
<b-navbar toggleable="lg" type="light" variant="success" fixed="top">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="/" >LinkHome</b-nav-item> -->
        <!-- <b-nav-item href="/about" >About</b-nav-item> -->
        <router-link tag="b-nav-item" to="/" active-class="active" exact>LinkHome</router-link>
        <router-link tag="b-nav-item" :to="{name: 'about'}" >About</router-link>
        <router-link tag="b-nav-item" :to="'/contacts'" >Contacts</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

         <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
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
 
  }
</script>
  
<style	lang="css" >

.router-link-exact-active .nav-link{
color:red !important;
font-style: bold;
  }
</style>