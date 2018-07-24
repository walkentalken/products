<template>
  <div class="container">
    <div class="row">
      <h1 class="title col-lg">
        Products for sale!
      </h1>
    </div>
    <div class="row">
      <form>
        <div class="form-group col-sm">
          <label for="search">Search title:</label>
          <input type="text" class="form-control" id="search" v-model="search" placeholder="Search title.."/>
        </div>

        <div class="form-group col-sm">
          <label for="search-description">Search Description:</label>
          <input type="text" class="form-control" id="search-description" v-model="searchDescription" placeholder="Search Description.."/>
        </div>


      </form>
    </div>
    <div class="row" v-if="filteredList && filteredList.length">
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
      search: '',
      searchDescription: ''
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
        && post.about.toLowerCase().includes(this.searchDescription.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>

