<template>
  <section class="users">
    <User v-for="user in users" :key="user.id"
            :name="user.name"
            :id="user.id"
            :email="user.email"
    />
  </section>
</template>

<script>
  import User from '~/components/User'

  export default {
    components: {
      User
    },
    async fetch () {
      this.users = await this.$http.$get('http://127.0.0.1:8000/api/users')
    },
    data () {
      return {
        users: null
      }
    }
  }
</script>

<style scoped>



</style>
