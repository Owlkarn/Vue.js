<script>
export default {
  name: "ProductsComponent",
  props: {
    product: Object,
  }
}
</script>

<template>
  <div>
    <img :src="product.image" :alt="product.name" width="100">
    <h3>{{ product.name }}</h3>
    <p>Цена: {{ product.price }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>