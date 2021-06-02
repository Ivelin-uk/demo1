<template>
    <div>
        <h1>graphQL</h1>
        {{hello}}
    </div>
</template>

<script>

import gql from 'graphql-tag'

export default {
    data(){
        return{
            hello: '',
        }
    },
    apollo:{
    // Simple query that will update the 'hello' vue property
        hello: gql`query {
            hello
        }`,
  }, 
}
</script>