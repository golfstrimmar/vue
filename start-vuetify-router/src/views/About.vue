<template lang="pug">


v-row.pug-example.no-gutters
  div
      p(v-if="visibleFirstBlock") First block
      p(v-else) Second block
  
  v-card.justify-center
    v-card-title title
    v-card-text  text
    v-img(
      src="../assets/t7.png", alt= "img"
      max-height="150"
      max-width="250"
      )
  div(
    :class="{'first-block': visibleFirstBlock, 'second-block': !visibleFirstBlock}"
    outline
      ) Info block <b>{{ value }}</b>
  
  div(
    v-for="(item, index) in items", 
    :key="item.key"
    ) {{ item.name }}
  
  v-btn
    a(
      @click="inverseVisibility", 
      href="#"
      ) переключите блоки





</template>

<script>

export default {
  data() {
    return {
      visibleFirstBlock: true,
      value: "Some synamic attribute",
      items: [
        { name: "Vue", key: "vue" },
        { name: "Nuxt", key: "nuxt" },
        { name: "Pug", key: "pug" },
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
  background: green;
}
.second-block {
  background: silver;
}
</style>
