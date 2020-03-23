<template>
  <section class="single-user">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import User from '~/components/User.vue'
  export default {
    components: {
      User
    },
    async fetch () {
      this.user = await this.$http.$get(`http://127.0.0.1:8000/api/users/${this.$route.params.id}`)
    },

    data () {
      return {
        user: {}
      }
    },
    head () {
      return { name: this.user.name }
    }
  }
</script>

<style scoped>
  .single-user {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    flex-flow: column;
  }

  .recipe-image {
    width: 100%;
  }

</style>
