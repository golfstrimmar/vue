<template>
  <div class="card" style="width: 18rem;">
  <img src="../../assets/img/img-6.gif" class="bd-placeholder-img card-img-top" alt="img" >
  <div class="card-body">
    <h5 class="card-title">Часы</h5>
    <p class="card-text">Супер часы</p>
    <div class="d-flex col-sm-8 ">
      <button class="btn btn-primary mt-0" @click="subb()">-</button>
      <input type="text" class="form-control mx-2" v-model="counttt">
      <button class="btn btn-primary mt-0" @click="addd()">+</button>
    </div>
    <a href="#" class="btn btn-primary mt-3">В корзину</a>
  </div>
</div>
</template>

<script>
export default {
 data(){
  return{
    counttt: 1,
    countLimit: 4,
}
},
watch:{
  // здесь выводится старое и новое значение переменной counttt которое заводится через инпут
counttt(newValue,oldValue){
  console.log(`Значение ${newValue}, Старое значение ${oldValue}`)
}
},
methods:{
  // убавлять можно только до 1
subb(){
  this.counttt > 1 ? this.counttt -- : ''
},
// добавлять можно только до установленного лимита. --4
addd(){
  this.counttt < this.countLimit ? this.counttt ++ : ''
}
}
}

</script>

<style>

</style> 