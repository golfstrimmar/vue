<template lang="pug">
.v-cart
  router-link(
      :to="{name: 'catalog'}"
      )
    .v-catalog__link-to-cart Back to Catalog
  h4(style="color: #6A1B9A") Cart
  p(
    v-if= "!cart_data.length"
     ) There are no products in cart...
  .v-cart__content
    VCartItem(
     v-for="(item,index) in cart_data"
      :key="item.index"
      :cart_item_data ="item"
      @DeleteFromCart="DeleteFromCart(index)"
      )
  .v-cart-total
      p total:
      p {{CartTotalCost}}₽
</template>

<script>
import VCartItem from '@/views/v-cart-item'
import { mapActions, mapGetters } from "vuex";
export default {
name: "v-cart",
  data: () => ({}),
   props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
components: {VCartItem},


methods: {
 ...mapActions([
"DELETE_FROM_CART"
]),

    DeleteFromCart(index){
      this.DELETE_FROM_CART(index);
    }
  },


computed: {
    CartTotalCost(){
      let result =[]
      for(let item of this.cart_data){
        result.push(item.price*item.quantity)
      }
      result = result.reduce(
        function(sum, el){ return sum + el;}
        )
      return result
   },
},

}
 

</script>

<style lang="sass">
.v-cart
  margin: 0 0 10rem 0
.v-cart__content
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 1rem
  justify-content: center
  justify-items: center
.v-cart-total
  position: fixed
  bottom: 0
  left: 0
  right: 0
  padding: 1rem
  background: #00BFA5
  color: white
  font-size: 1.5rem
  text-align: center
  display: flex
  justify-content: center
  p
    margin: 0 1rem 0 0
</style>