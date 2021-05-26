<template>
    <div>
        <div>
            <h1>Users</h1>
            <add-button v-on:update="Add" :btn-text="addButtonText"></add-button>   
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
                <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
                >
                    <v-list-item v-for="(item, index) in names" :key="item" :id="index">
                    <v-list-item-content>
                        <v-list-item-title> <p><span>{{item.firstName}}</span> <span>{{item.lastName}}</span> <span v-on:click="Delete">Delete</span></p></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-card>
            </template>
        </div>   
    </div>
</template>

<script>
import addButton from '@/components/buttons/add.vue'
import json from '@/json/data.json'

export default ({
    data(){
        return{
            names: [],
            addButtonText: 'Adds',
            first: '',
            last: '',
            myJson: json,
        }
    },
    components: {
        'add-button': addButton,
    },
    methods: {
        Add: function() {
            let firstName = this.first;
            let lastName = this.last;
            this.names.push({ firstName: firstName,lastName: lastName});
            this.first = '';
            this.last = '';
        },
        Delete: function(event) {
            let id = event.target.parentElement.parentElement.id;
            console.log(id);
            this.names.splice(id, 1);
        },
    },
    created() {
        let arr = this.myJson;
        for(let i = 0; i < arr.length; i++){
            this.names.push({ firstName: arr[i].firstName,lastName: arr[i].lastName});
        }
    }
})
</script>
