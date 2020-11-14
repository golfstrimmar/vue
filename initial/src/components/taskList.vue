<template>
  <div class="container">
    <header>
      <h1>{{title}}</h1>
    </header>
    <form class="form">
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="itemForm" placeholder="Add task">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="addItem" type="button">Add</button>
        </div>
      </div>
    </form>
   <table class="table table-striped table-dark">
     <thead>
       <tr>
         <th scoped="col">
           Tasks
         </th>
       </tr>
     </thead>
     <tbody>
       <tr 
       v-for="item in items"
        :key="item"
       >
         <th scope="row">
           {{item.text}}
          <button @click="deliteItem(index)" class="btn btn-danger" type="button">
            Х
          </button>
         </th>
       </tr>
     </tbody>
   </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: "task List",
      items:[
        {text:"First"},
        {text:"Second"},
        {text:"First"},
        {text:"Second"},
      ]
    }
  },
  methods:{
addItem(){
var input = document.getElementById('itemForm');
if (input.value !==""){
  this.items.push({
text: input.value
  })
  input.value ="";
}
},
deliteItem(index){
this.items.splice(index, 1)
}
  }
}
</script>