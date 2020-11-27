<template>
  <div class="container">
    <hr />
    <!-- ------------------------------------------------------- -->
    фильтрацмя списков.миксин 
    <br />
    <input type="text" v-model="searchGame" placeholder="searchGame" />
    <ul>
      <li v-for="(game, index) in fiiteredGames" :key="index">{{ game }}</li>
    </ul>
  </div>
</template>

<script>
// переносится js? который якобы повторяется --- в отдельный файл mixins/listMixins
import listMixins from "./mixins/listMixins";

// прописываются миксины, какие нужны
export default {
 mixins:[listMixins]
}
</script>

<style lang="css" scoped></style>
