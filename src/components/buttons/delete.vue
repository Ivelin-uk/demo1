<template>
    <v-btn
    @click="del"
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
        del: function(){
            this.$emit('del');
        }
    }
})
</script>