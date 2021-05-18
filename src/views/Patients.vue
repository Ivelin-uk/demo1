<template>
  <div class="about">
    <patientsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import patientsTable from '@/components/patientsTable.vue'

export default {
  name: 'Home',
  components: {
    patientsTable,
  }
}
</script>