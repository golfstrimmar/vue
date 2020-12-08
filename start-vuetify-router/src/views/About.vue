<template lang="pug">
v-container
  v-row.pug-example.no-gutters
    v-col(cols="12")
      p(v-if="visibleFirstBlock"  style="color: perple") First block
      p(v-else  style="color: red") Second block

    v-card( color="red accent-1"  cols="4")
      v-card-title( style="text-align:center"  ) title
      v-card-text  text
      v-img(src="../assets/t7.png", alt= "img"  max-height="150"  max-width="250")
    v-col( cols="12") 
    v-col.my-3( cols="6" outline
      :class="{'first-block': visibleFirstBlock, 'second-block': !visibleFirstBlock }"
        ) Info block <b>{{ massage }}</b>

    v-col( cols="12")
      h1(v-for="(item, index) in items" :key="index") {{ item.key+': '+item.name }}
    
    v-col( cols="12")
      v-btn.pa-4(  color="green accent-3"  @click="inverseVisibility") переключите блоки





</template>

<script>

export default {
  data() {
    return {
      visibleFirstBlock: true,
      massage: "Some synamic attribute",
      items: [
        { name: "Vue", key: "1" },
        { name: "Nuxt", key: "2" },
        { name: "Pug", key: "3" },
      ],
    };
  },

  methods: {
    inverseVisibility() {
      this.visibleFirstBlock = !this.visibleFirstBlock;
    },
  },
};
</script>

<style scoped>

.first-block {
  background: aqua;
}
.second-block {
  background: purple;
}
</style>
