<template>
  <div class="conteiner">
    <patientsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import patientsTable from '@/components/patientsTable.vue'

export default {
  name: 'PatientsTable',
  components: {
    patientsTable,
  }
}
</script>

<style>
    .conteiner{
      width: 80%;
      margin: auto;
    }
</style>