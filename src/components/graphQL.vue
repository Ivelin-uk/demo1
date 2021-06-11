<template>
  <div class="Apollo">
      <h1>Apollo</h1>
      <button v-on:click="addPatients">Add Patient</button>
      <li v-for="p in patients" :key="p.first_name">
          {{ p.first_name }};
      </li>
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
    data(){
      return{
          firstName: '',
          city: '',
          patients: []
      }
    },

    created () {
      this.initialize()
      //console.log(this.patients)
    },

    apollo: {
        patients: {
            query() {
                return gql`query Patients {
                    Patients {
                        id
                        first_name
                    }
                }`
            },
            update(data) {
                return data["Patients"]
            }
        },
        
    },
    methods:{
      async addPatients(){
          // Call to the graphql mutation
          await this.$apollo.mutate({
          // Query
          mutation: gql`
            mutation ($firstName: String!,$city: String!) {
              PatientInsert(data: {first_name: $firstName, city: $city}){
                first_name
                city
              }
            }`,
  
          // Parameters
          variables: {
            firstName: this.firstName,
            city: this.city,
          },
        })
      }
    }
}
</script>

