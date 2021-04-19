<template lang="pug">
.v-main-wrapper 
  router-view 
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "v-main-wrapper",
  data: () => ({
  }),
 
  components: {
  },
  methods: { },
  computed: {
    ...mapGetters([
'CART'
])
  },
  watch: {},
  mounted() {}
  }
</script>

<style lang="sass">
.v-main-wrapper
  display: flex
  flex-direction: column
  align-items: center
  max-width: 60%
  margin: 0 auto
</style>