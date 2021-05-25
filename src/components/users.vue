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
            <ul id="example-1">
                <li v-for="(item, index) in names" :key="item" :id="index">
                    <p><span>{{item.firstName}}</span> <span>{{item.lastName}}</span> <span v-on:click="Delete">Delete</span></p>
                </li>
            </ul>
        </div>   
    </div>
</template>

<script>
import addButton from '@/components/buttons/add.vue'

export default ({
    data(){
        return{
            names: [
                { firstName: 'pesho' , lastName: 'Petrov'},
                { firstName: 'Pesho' , lastName: 'Petrov'},
                { firstName: 'Ivan'  , lastName: 'Ivanov'},
                { firstName: 'Gosho' , lastName: 'Goshev'},
            ],
            addButtonText: 'Add',
            first: '',
            last: '',
        }
    },
    components: {
        'add-button': addButton,
    },
    methods: {
        Add: function() {
            console.log(this.first + ' ' + this.last);
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
    }
})
</script>
