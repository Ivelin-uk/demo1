<template>
    <div>
        <p>First Name</p>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>

<script>

export default ({
    data() {
        return{
            message: '',
        }
    },
})
</script>
