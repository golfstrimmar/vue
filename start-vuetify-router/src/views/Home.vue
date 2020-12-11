<template lang="pug">
 
v-container
  v-row
    v-col( cols="12")
      h1 HOME
    v-col.mx-auto( cols="8")
      h3 есть инпут. есть массив карточек.при добавлении информации в инпут и по клику на кнопку-- добавляется следующая карточка с информацией из инпута.

      v-text-field(
        label='заголовок' 
        elevation='8' 
        hide-details='auto'
        v-model="cardTitle"
        @keyup.enter="NewCard()"
        )
      v-textarea(
        label='описание' 
        v-model="cardDescription"
        @keyup.enter="NewCard()"
        )

      v-col( cols="12")
        v-btn.pa-4( dark='' color='indigo' 
        @click="NewCard()"
        )
          v-icon(left)  mdi-wrench
          | Добавить карточку
 
</template>

<script>
export default {
  data: () => ({
    cardTitle: "",
    cardDescription: "",
  }),
  components: {},
  mounted() {},
  methods: {
    NewCard() {
      if (this.cardTitle === "") {
        return;
      }
       const card = {
        title: this.cardTitle,
        description: this.cardDescription,
        completed: false,
      };
      this.$store.dispatch('NewCard',card)
      console.log(card);
      this.cardTitle = "";
      this.cardDescription = "";
    },
  },
  computed: {},
};
</script>
