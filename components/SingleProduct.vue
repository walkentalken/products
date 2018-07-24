<template>
  <div class="single-product">
    <img :src="product.picture">
    {{product.title}}
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
