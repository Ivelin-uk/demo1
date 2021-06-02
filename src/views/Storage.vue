<template>
  <div class="storage">
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