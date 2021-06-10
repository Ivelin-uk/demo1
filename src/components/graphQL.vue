<template>
    <div>
        <div>
            <h1>GraphQL</h1>          
        </div>

        <div>
            <template>
                <v-form>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        sm="4"
                        >
                        <v-text-field
                            v-model="firstName"
                            label="First Name"
                            outlined
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="4"
                        >
                        <v-text-field
                            v-model="city"
                            label="City"
                            outlined
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="4"
                        >
                        <add-button v-on:addPatients="Add" :btn-text="addButtonText"></add-button>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-form>
            </template>
        </div>

        <div>
            <template>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            First name
                        </th>
                        <th class="text-left">
                            Last name
                        </th>
                        <th class="text-left">
                            Delete
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in patients"  
                        :key="item"
                        :index="index"
                        >
                        <td>{{ item.first_name }}</td>
                        <td>{{ item.city }}</td>
                        <td><delete-button v-on:del="Delete(index)" :btn-text="deleteButtonText"></delete-button> </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </template>
        </div>   
    </div>
</template>

<script>
import gql from "graphql-tag"
import addButton from '@/components/buttons/add.vue'
import deleteButton from '@/components/buttons/delete.vue'

export default {
    data(){
      return{
          firstName: '',
          city: '',
          addButtonText: 'Add',
          deleteButtonText: 'Delete',
          patients: []
      }
    },
    components: {
        'add-button': addButton,
        'delete-button': deleteButton,
    },
    apollo: {
        patients: {
            query() {
                return gql`query Patients {
                    Patients {
                        id
                        first_name
                        city
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
          await this.$apollo.mutate({
          mutation: gql`
            mutation ($firstName: String!,$city: String!) {
              PatientInsert(data: {first_name: $firstName, city: $city}){
                first_name
                city
              }
            }`,
          variables: {
            firstName: this.firstName,
            city: this.city,
          },
        })
      }
    }
}
</script>