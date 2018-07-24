<template>
  <div class="container">
    <div class="row">
      <h1 class="title">
        Products for sale!
      </h1>
      <div class="search-wrapper">
        <label>Search title:</label>
        <input type="text" v-model="search" placeholder="Search title.."/>
      </div>
    </div>
    <div class="row" v-if="productList && productList.length">
      <div v-for="(product, index) in filteredList" :key="index" class="col-sm">
        <single-product :product="product" />
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import SingleProduct from '~/components/SingleProduct.vue'
import product from '~/static/product'


export default {
  components: {
    SingleProduct
  },
  data() {
    return {
      productList: [],
      errors: [],
      search: ''
    }
  },
  async created() {
     try {
        const response = await axios.get(`https://next.json-generator.com/api/json/get/EJplRmgNS`)
        this.productList = response.data
     } catch (e) {
        this.errors.push(e)
        this.productList = product.productList
     }
  },
  computed: {
    filteredList() {
      return this.productList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
.container ul,
.container li{
  list-style: none;
}
</style>

