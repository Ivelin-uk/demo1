<template>
  <div class="conteiner">
      <storage/>
  </div>
</template>

<script>
// @ is an alias to /src
import storage from '@/components/storage.vue'

export default {
  name: 'Storage',
  components: {
    storage
  }
}
</script>

<style>
    .conteiner{
      width: 80%;
      margin: auto;
    }
</style>