<template>
  <nuxt-link :to="'/users/' + id ">
  <article class="user">
    <h3>{{ name }}</h3>
  </article>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['id', 'name', 'email']
  }
</script>

<style scoped>

  a {
    text-decoration: none;
    color: black;
  }

  .user {
    box-sizing: border-box;
    width: 280px;
    padding: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #aaa;
    margin: 10px;
  }

  </style>
