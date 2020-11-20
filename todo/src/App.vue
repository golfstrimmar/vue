// 55.27 на ролике
<template>
  <div id="app">
    <!-- {{list[0].content}}  -->
    <!-- {{list[1].content}}  -->
    <!-- <ol>
      <li v-for="item in list" :key="item">
        {{ item.content }}
      </li>
    </ol> -->
<div class="container">
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">Todo application </h3>
			</div>
			<div class="card-body">
				<div class="input-group" id='actionPanel1'>
					<div class="input-group-prepend mr-2">
						<span id="selectAllAction">
							<button class="btn btn-outline-primary" type="button" @click="selectAll()">Select all</button>
						</span>
					</div>
					<input type="text" class="form-control" id='input' v-model="input" @keyup.enter="inputHandler()">
				</div>
				<div id='actionPanel2' class="mt-2">
					<div class="btn-group btn-block">
						<button type='button' class='btn btn-success mr-2' id="doneAction">Done</button>
						<button type='button' class='btn btn-info mr-2' id="restoreAction">Restore</button>
						<button type='button' class='btn btn-danger' id="removeAction">Remove</button>
					</div>
				</div>
			</div>
			<ul class="list-group list-group-flush" id='list'>
        <li class="list-group-item" v-for="item in list" :key="item.id">
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" :id="item.id" v-model="item.selected">
            <label :for="item.id" class="form-check-label" :class="{todoDone: item.done, test: !item.done }"		>
              <h5>{{ item.content }}</h5>
              </label>
            <button class="btn btn-outline-danger " style="float: right" v-if="item.selected" @click="restore(item)">restore</button>
            <button class="btn btn-outline-success mr-2" style="float: right" v-if="item.selected" @click="done(item)">done</button> 
          </div>
        </li>
      </ul>
		</div>
	</div><!-- container -->
  </div><!-- id="app" -->
</template>

<script>

export default {
  name: "App",
  components: {
  }
  ,
  data(){
    const data ={}
    data.list = []
    
    const item1 = {
      id: 1,
      content: "Купить хлеба",
  selected: false,
  done: false
    }
    const item2 = {
      id: 2,
      content: "Купить пива",
      selected: false,
  done: false		
    }
    data.input = "iii"  
   data.list.push(item1)
    data.list.push(item2)
    return data
  },
  methods:{
    inputHandler(){
      const input = this.input.trim()
      if(!input){
        return
      }
      const item = {
       id: this.list.length + 1,
        content: input,
        selected: false,
  done: false		
        }
this.list.unshift(item)
this.input=""
    },
selectAll(){
  for(const item of this.list){
    item.selected = true
  }
},
restore(item){
console.log(item)
},
done(item){
item.done = true
}


  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
