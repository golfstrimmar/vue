<template id="task">
  <div class="wrapper">
   <h1>Welcome!</h1>
   <button class="btn btn-success">Log in</button>
   <button class="btn btn-success">Sign up</button>
   
<h2>{{message}}</h2>
<h1>{{author}}</h1>
<h1>{{title}}</h1>
<p>{{description}}</p>
</div>
</template>

<script>
export default {
//  передача данных из досчернего компонента task с помощью метода props  в родительский компонент vue
  props:['message', 'author', 'title', 'description'],
  // data(){
  //   return{
  //     author: "David",
  //     title:"js",
  //     description: " bla-bla-bla"
  //   }
  // }
}
</script>



<style scoped>
.wrapper{
padding: 0 0 0 50px;	
}
  .btn{
    margin: 0 0 0 20px;	
  }
    .btn:first-of-type{margin: 0 0 0 0;	} 
</style>