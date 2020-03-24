<template>
  <section>
    <h2>Update product</h2>
    <form v-on:submit.prevent="updateProduct">
      <product-form :the-product="product"></product-form>
      <button type="submit" class="btn btn-primary">Update</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
  import ProductForm from '../../../components/product-form.vue'
  export default {
    components: { ProductForm },
    layout: 'vue-crud',
    data () {
      return {"product": {id: this.$route.params.id, name: '', description: '', price: '', features: []}}
    },
    methods: {
      updateProduct (e) {
        // normally use store.commit, but as example, if REST backend is used, call store.dispatch action.
        this.$store.dispatch('updateProduct', this.product)
        this.$router.push('/crud_index')
      }
    }
  }
</script>
