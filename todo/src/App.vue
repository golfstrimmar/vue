

<template>
<!-- ключивский хорошо -->
<!-- https://www.youtube.com/watch?v=XNgNINy8ve4&t=369s&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8WebCademy -->
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
							<button class="btn btn-outline-primary" type="button" @click="selectAll()">Select/Unselect all</button>
						</span>
					</div>
					<input type="text" class="form-control" id='input' v-model="input" @keyup.enter="inputHandler()">
				</div>
				<div id='actionPanel2' class="mt-2" v-if="someSelected">
					<div class="btn-group btn-block">
						<button type='button' class='btn btn-success mr-2' id="doneAction" @click='doneAll()'>Done</button>
						<button type='button' class='btn btn-info mr-2' id="restoreAction" @click='restoreAll()'>Restore</button>
						<button type='button' class='btn btn-danger' id="removeAction" @click='removeAll()'>Remove</button>
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
            <button class="btn btn-outline-danger " style="float: right" v-if="item.selected && item.done" @click="restore(item)">restore</button>
            <button class="btn btn-outline-success mr-2" style="float: right" v-if="item.selected && !		item.done" @click="done(item)">done</button> 
            <button class="btn btn-outline-danger " style="float: right" v-if="item.selected && item.done" @click="remove(item)">remove</button>
          </div>
        </li>
      </ul>
		</div>
	</div><!-- container -->
<!-- ----------------------------------------------------- -->
<hr>
<!-- <div class="container">

<div class="input-group">
<button class="btn btn-outline-success" @click="addLevel()">
  Добавить пункт
</button>
<input type="text" v-model="enter" class="ml-2 form-control" >
</div>
  <ul class="list-group list-group-flush mt-2" style="background: pink"> 
    <li class="list-group list-group-flush " style="border: 1px solid blue" v-for="level in levels" :key="level.id" :class="{todoDone: level.selected}" >
      <div class=" justify-content-between align-items-center row no-gutters pt-2 pb-2">
        <span class="ml-5">id:{{level.id + ' ' + level.content}}</span>
        <input type="checkbox" class="mr-auto ml-3" v-model="level.selected">
        <button class="btn btn-outline-success mr-2" @click="done(level)" > done</button>
      </div>
    </li>
  </ul>
</div> -->



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
//     data.levels = []
   
//     const level1 = {
//       id: 1,
//       content: "первый пункт",
//       done: false
//     }
//     const level2 = {
//       id: 2,
//       content: "второй  пункт",
//       done: false
//     }
// data.levels.push(level1)
// data.levels.push(level2) 
// -------------------------------------------------------------------
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
    data.input = ""  
   data.list.push(item1)
    data.list.push(item2)
    return data
  }
  ,
  methods:{
//     addLevel(){
//       const level = {
//       id: this.levels.length + 1,
//       content: this.enter,
//       done: this.done
//     }
//       this.levels.unshift(level)
//       this.enter =""
//     },

// done(level){
//  level.done= true
// }



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
  const newState = !this.someSelected
  for(const item of this.list){
    item.selected = newState
  }
},
remove(removedItem){
const list =[]
for(const item of this.list){
  if(item !== removedItem){
    list.push(item)
    item.id = list.length
  }
}
this.list = list

},
done(item){
item.done = true
},
restore(item){
  item.done = true
},
doneAll(){
  for (const item of this.list){
    if(item.selected){
      item.done =true
    }
  }
},
restoreAll(){
   for (const item of this.list){
    if(item.selected){
      item.done = false
    }
  }
},
removeAll(){
  const list =[]
for(const item of this.list){
  if(!item.selected){
    list.push(item)
    item.id = list.length
  }
}
this.list = list
}
  }
  ,
  computed:{
    someSelected(){
      for(const item of this.list){
  if(item.selected){
   return true
  }
}
return false
  }
}
}

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
