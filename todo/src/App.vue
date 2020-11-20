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
							<button class="btn btn-outline-primary" type="button">Select all</button>
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
            <input type="checkbox" class="form-check-input" :id="item.id">
            <label :for="item.id" class="form-check-label">
              <h5>{{ item.content }}</h5>
              </label>
            <button class="btn btn-outline-danger " style="float: right">restore</button>
            <button class="btn btn-outline-success mr-2" style="float: right">done</button> 
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
      content: "Купить хлеба"
    }
    const item2 = {
      id: 2,
      content: "Купить пива"
    }
    data.input = "iii"  
   data.list.push(item1)
    data.list.push(item2)
    return data
  },
  methods:{
    inputHandler(){
      console.log(this.input)
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
