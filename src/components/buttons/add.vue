<template>
    <v-btn
    @click="add"
    color="primary"
    elevation="2"
    >{{btnText}}</v-btn>
</template>

<script>

export default ({
    props:[
        'btnText',
    ],
    methods:{
        add: function(){
            this.$emit('add');
        }
    }
})

</script>
