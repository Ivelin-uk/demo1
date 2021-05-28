<template>
    <div>
        <div>
            <h1>Users</h1>
            <add-button v-on:add="Add" :btn-text="addButtonText"></add-button>   
        </div>

        <div>
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
                            outlined
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            v-model="last"
                            label="Last Name"
                            outlined
                        ></v-text-field>
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
                        v-for="(item, index) in usersFromStorage"  
                        :key="item"
                        :index="index"
                        >
                        <td>{{ item.firstName }}</td>
                        <td>{{ item.lastName }}</td>
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
import addButton from '@/components/buttons/add.vue'
import deleteButton from '@/components/buttons/delete.vue'
import json from '@/json/data.json'

export default ({
    data(){
        return{
            usersFromJson: [],
            usersFromStorage: [],
            addButtonText: 'Add',
            deleteButtonText: 'Delete',
            first: '',
            last: '',
            myJson: json,
        }
    },
    components: {
        'add-button': addButton,
        'delete-button': deleteButton,
    },
    methods: {
        Add: function() {
            let firstName = this.first;
            let lastName = this.last;

            this.usersFromStorage.push({ 
                firstName: firstName,
                lastName: lastName, 
            });

            this.first = '';
            this.last = '';

            let usersAsString = JSON.stringify(this.usersFromStorage);
            localStorage.setItem('users',usersAsString);
        },
        Delete: function(id) {
            this.usersFromStorage.splice(id, 1);
            let usersAsString = JSON.stringify(this.usersFromStorage);
            localStorage.setItem('users',usersAsString);
        },
        getUsersFromJson(){
            let arr = this.myJson;
            for(let i = 0; i < arr.length; i++){
                this.usersFromJson.push({ 
                    firstName: arr[i].firstName,
                    lastName: arr[i].lastName, 
                });
            }
        }
    },
    created() {
        
        this.getUsersFromJson();
        if(localStorage.length == 0){
            let usersAsString = JSON.stringify(this.usersFromJson);
            localStorage.setItem('users',usersAsString);
            let localStorageData = localStorage.getItem('users');
            let array = JSON.parse(localStorageData);
            for(let i = 0; i < array.length; i++){
                this.usersFromStorage.push({
                    firstName: array[i].firstName,
                    lastName: array[i].lastName,
                });
            }
        }else{
            let localStorageData = localStorage.getItem('users');
            let array = JSON.parse(localStorageData);
            console.log(array);
            for(let i = 0; i < array.length; i++){
                this.usersFromStorage.push({
                    firstName: array[i].firstName,
                    lastName: array[i].lastName,
                });
            }
        }

       

        
    
    }
})
</script>
