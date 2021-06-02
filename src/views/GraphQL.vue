<template>
  <div class="conteiner">
    <graphQL/>
    <h1>{{hello}}</h1>
  </div>
</template>

<script>
import graphQL from '@/components/graphQL.vue'
import gql from 'graphql-tag'

export default {
  name: 'GraphQL',
  components: {
    graphQL
  },
  apollo:{
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      d
    }`,
  },
  
}
  
 

</script>

<style>
    .conteiner{
      width: 80%;
      margin: auto;
    }
</style>
