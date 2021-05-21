<template>
    <div>
        <h1>Users {{massega}}</h1>
        <app-input></app-input>
        <div>
            <v-btn color="primary" elevation="2" v-on:click="Add">Add Name</v-btn>
            <ul id="example-1">
                <li v-for="(item, index) in names" :key="item.firstName" :id="index">
                    <p><span>{{item.firstName}}</span> <span v-on:click="Delete">Delete</span></p>
                </li>
            </ul>
            <v-btn color="primary" elevation="2" v-on:click="event">Add 1.</v-btn>
            <p>The button above has been clicked {{ counter }} times.</p>
        </div>
    </div>
</template>

<script>
import input from '@/components/input.vue'

export default ({
    data(){
        return{
            massega: 'work',
            names: [
                { firstName: 'pesho' },
                { firstName: 'Pesho' },
                { firstName: 'Ivan' },
                { firstName: 'Gosho' },
            ],
            counter: 0,
        }
    },
    components: {
        'app-input': input,
    },
    methods: {
        Add: function() {
            this.names.push({ firstName: 'pesho2' });
        },
        Delete: function(event) {
            let id = event.target.parentElement.parentElement.id;
            console.log(id);
            this.names.splice(id, 1);
        },
    }
})
</script>
