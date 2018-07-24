<template>
  <div class="single-product"  v-bind:class="{ 'sold-out': soldOut }">
    <img :src="product.picture">
    <div class="detail-container">
      <span v-if="soldOut">Sold Out!!!</span>
      <h2>{{product.title}}</h2>
      <span>{{product.company}}</span> | <span>{{product.color}}</span> | <span>{{product.price}}</span>
      <p>{{product.about}}</p>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    product: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      soldOut: this.product.soldOut
    }
  }
}
</script>

<style>
.single-product{padding: 1em; text-align: center;}
.sold-out{background: #ffe9e0;}
</style>
