<template>
  <div class="single-product">
    <img :src="product.picture">
    <div class="detail-container">
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
  }
}
</script>

<style>

</style>
