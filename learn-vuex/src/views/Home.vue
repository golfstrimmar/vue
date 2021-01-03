<template lang="pug">
v-container
    v-row.justify-space-between
        v-card.col-md-3.ma-4(
            v-for="(post, index) in allPosts" 
            :key="index"
        )
            v-card-title {{post.title}}
            v-card-text {{post.body}}
    
</template>

<script>
export default {

  mounted() {
    this.$store.dispatch("fetchPosts")
  },
  computed: {
    //   будет реагировать на любое изменение getter
    allPosts(){
        return this.$store.getters.allPosts
    }
  },
};
</script>

<style lang="sass" scoped></style>
