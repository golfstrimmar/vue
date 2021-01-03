 export default {
   state: {
     posts: [],
   },
   mutations: {
     updatePosts(state, posts) {
       state.posts = posts;
     },
   },
   actions: {
     async fetchPosts(ctx) {
       const res = await fetch(
         "https://jsonplaceholder.typicode.com/posts?_limit=9"
       )
       const posts = await res.json();
       ctx.commit("updatePosts", posts);
     },
   },
   getters: {
     // это функции которые берут из state что-то и возвращают в виде объектов. их удобство в том, что можно использовать в любом месте сайта
     allPosts(state) {
       return state.posts;
     },
   },
 };
 
