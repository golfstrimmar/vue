<template lang="pug">
div.wrapper
  h2(v-once) {{titleHeader}}
  form(@submit.prevent="checkForm")
      .input-field
        input#input_text(
          type='text' data-length='10' autocomplete="off"
          v-model= "form.title"
          )
        label(for='input_text') заголовок карточки
      .input-field
        input#input_text(type='text' data-length='10' autocomplete="off"
        v-model= "form.text"
        )
        label(for='input_text')  текст карточки
  
      button.btn.waves-effect.waves-light(type='submit' name='action')
        | Submit
        i.mdi.mdi-send-outline
  ul.cards
    li(v-for="(card,index) in cards" :key="card.index")
      .card.blue-grey.darken-1
        .card-content.white-text
          h3 {{card.title}}
          p {{card.text}}




</template>

<script>
export default {
  name: 'App',
 data: () => ({
   titleHeader:"Рендерим в верстку содержимое полей инпутов",
    form: {
      title: '',
      text: ''
    },
    title: '',
    text: '',
    cards:[],

   }), 

    components: {  

      },
        mounted() {  

         },
           methods: { 
                checkForm(){
if (this.form.title===''  && this.form.text==='') {return}
const card = {
title : this.form.title,
text : this.form.text
}

this.cards.push(card)
console.log(card)

// reset
this.form.title = '',
this.form.text = ''


                }
              },
                computed:{   

                 }

};
</script>

<style lang="sass" >
.wrapper
  padding: 1rem 2rem
  form
    max-width: 40rem
    button
      i
        margin: 0 0 0 1rem
</style>