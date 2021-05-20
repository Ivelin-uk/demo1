<template>
    <div>
        <h1>Users</h1>
        <app-input></app-input>
    </div>
</template>

<script>
import input from '@/components/input.vue'

export default ({
    components: {
        'app-input': input,
    }
})
</script>
