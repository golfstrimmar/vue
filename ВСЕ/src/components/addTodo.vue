<template>
<div class="container">
 <form class="row" @submit.prevent="onSubmit"		>
   <input type="text" class="col-6" v-model="title">
   <button type="submit" class="btn btn-secondary">Submit</button>
 </form>
 </div>
</template>
<style lang="css" scoped>
  input{
margin: 0 10px 0 0;
  }
</style>
<script>
export default {
  methods: {
    onSubmit(){
      console.log(this.title)
      if(this.title.trim()){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo',newTodo	)
        this.title=""
      }
    }
  },
  data(){
    return{
      title:""
    }
  }
}
</script>