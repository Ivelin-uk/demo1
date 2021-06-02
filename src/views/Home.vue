<template>
  <div class="conteiner">
    <home/>
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/home.vue'

export default {
  name: 'Home',
  components: {
    home
  }
}
</script>

<style>
    .conteiner{
      width: 80%;
      margin: auto;
    }
</style>
