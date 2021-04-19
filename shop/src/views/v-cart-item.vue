<template lang="pug">
.v-cart-item.card
  .card-image
    img(
        :src="   require( '../assets/images/'  + cart_item_data.image )"
        )

  .card-content
      .v-cart-info
        p name: {{cart_item_data.name}}
        p price: {{cart_item_data.price}}
        p article:  {{cart_item_data.article}}
  .v-cart-quantity Количество: 
    p {{cart_item_data.quantity}}
  a.v-cart-item__button.waves-effect.waves-light.btn-small.blue(
    @click="DeleteFromCart"
  ) Удалить
</template>

<script>
export default {
name: "v-cart-item",
  data: () => ({}),
  props: {
    cart_item_data:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  methods: {
    DeleteFromCart(){
      this.$emit('DeleteFromCart' )
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style lang="sass">
.v-cart-item__button
  margin: 0 0 1rem 0
.v-cart-quantity
  font-size: 0.8rem
  p 
    display: inline-block
    padding: .5rem
    border: .2rem solid #0D47A1
    border-radius: 50%
    background: #1E88E5
    color: white

</style>