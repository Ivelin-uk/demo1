<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="First Name"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    props:[
      'firstName',
      'lastName'
    ],
    data: () => ({
      first: 'Pesho',
      last: '',
    }),
  }
</script>
