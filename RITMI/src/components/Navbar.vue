<template lang="pug">
nav.navbar
  .nav-wrapper
    .navbar-left
      a(href='#')
        i.material-icons.black-text(
          @click.prevent="$emit('click')"
          ) dehaze
      section.first
          .first__title
              h1 Весенние ритмы-2021
              ._title-1 г. Мариуполь

  
</template>
  
<script>
export default {
    }
</script>
  
<style	lang="sass" scoped>
  
</style>