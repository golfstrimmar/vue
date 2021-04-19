<template lang="pug">
.v-catalog-item 
  .card
    .card-image
      img(
        :src="   require( '../assets/images/'  + product.image )"
        )
      span.card-title name: {{product.name}}
    .card-content
        p price:  {{product.price}}₽
        p article:  {{product.article}}
        p avialable:  {{product.avialable}}
        p category: {{product.category}}
    .card-action
      a(
        href='#'
        @click.prevent = 'AddToCart'
        ) Добавить в корзину



</template>

<script>
export default {
name: "v-catalog-item",
  data: () => ({


  }),
  props: {
      product:{
      type: Object,
      default(){
          return {}
                } 
              },
  },

  components: {},
  methods: {
    // эмитим данную карточку наверх
AddToCart(){
  this.$emit('AddToCart', this.product)
}
  
  },
  computed: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="sass">
.card-image 
  img
    max-width : 8rem
    margin: 0 auto
.card-title
  color: #283593!important
  font-size: 1rem!important
</style>