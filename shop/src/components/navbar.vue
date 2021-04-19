<template lang="pug">

nav 
  .nav-wrapper
    a.brand-logo(href='#') Logo
    ul#nav-mobile.right.hide-on-med-and-down
      li(
        v-for="( pagesBatton, index) in pagesBattons"
        :key="index"
        :to = 'pagesBatton.route'
         )
        a {{pagesBatton.title}}



</template>

<script>
export default {
  data: () => ({
    pagesBattons: [
      {
        title: "Catalog",
        route: "/",
      },
      {
        title: "Cart",
        route: "/VCart",
      },
    ],
    drawer:false,
  }),
  components: {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang="sass">
button 
  height: 100% !important

.v-image
  width: 40px
  height: 40px

</style>
