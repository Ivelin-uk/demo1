<template>
    <v-btn
    @click="update"
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
        update: function(){
            this.$emit('update');
        }
    }
})
</script>
