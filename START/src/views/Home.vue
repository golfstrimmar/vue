<template lang="pug">
v-container
    h2 здесь выходят посты с jsonplaceholder при помощи axios
    v-row.justify-space-between
        v-card.col-md-3.ma-4(
            v-for="(post, index) in posts" 
            :key="index"
        )
            v-card-title {{post.title}}
            v-card-text {{post.body}}
    
</template>

<script>
export default {
  data: () => ({
    posts: [],
  }),
  components: {},
  mounted() {
    this.fetchToDo();
  },
  methods: {
    fetchToDo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=9")
        .then((response) => (this.posts = response.data));
    },
  },
  computed: {},
};
</script>

<style lang="sass" scoped></style>