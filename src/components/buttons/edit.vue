<template>
    <v-btn
    @click="edit"
    color="secondary"
    elevation="2"
    >{{btnText}}</v-btn>
</template>

<script>
export default ({
    props:[
        'btnText',
    ],
    methods:{
        edit: function(){
            this.$emit('edit');
        }
    }
})
</script>