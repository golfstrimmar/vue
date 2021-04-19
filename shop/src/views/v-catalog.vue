<template lang="pug">
.v-catalog
  router-link(
      :to="{name: 'cart', params: {cart_data:CART}}"
      )
    .v-catalog__link-to-cart  Cart: {{CART.length}}

  .v-catalog__list
        VCatalogItem(
          :product="product"
           v-for="(product,index) in PRODUCTS"
          :key="product.index"
          @AddToCart="AddToCart"
        )
</template>

<script>
import VCatalogItem from "@/views/v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",

  data: () => ({}),

  props: {},
  components: {
    VCatalogItem,
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FRON_API",
       "ADD_TO_CART"
       ]),
    AddToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS","CART"]),
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FRON_API();
  },
};
</script>

<style lang="sass">
.v-catalog__link-to-cart
  border: .2rem solid #6A1B9A
  border-radius: .4rem
  display: inline-block
  padding: 0 .3rem
  right: 2rem
  top: 1rem
  position: absolute
.v-catalog__list
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: .5rem
</style>
