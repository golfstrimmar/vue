<template>
    <div class="container">
        <h1>Posts</h1>
     <ul>
       <!-- добавляестя переход по ссылкам постов по ссылкам -->
       <!-- формируется ссылка на пост и id поста -->
        <router-link 
        tag="li" 
        v-for="post in 10"  
        :to="`/post/${post}`"
        :key="post"
        >
        <a >Post: {{post}}</a>

        </router-link>
    </ul>  
    </div>
</template>
  
<script>
export default {
  }
</script>
  
<style	lang="css" scoped>
  *{
  list-style: none;
  }
</style>