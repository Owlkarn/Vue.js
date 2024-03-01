<script>
import ProductsComponent from "@/components/ProductsComponent.vue";

export default {
  name: "SortComponent",
  components: {ProductsComponent},
  data() {
    return {
      products: [{
        id: 1,
        name: 'Товар 1',
        image: 'product1.jpg',
        price: 100
      },
        {
          id: 2,
          name: 'Товар 2',
          image: 'product2.jpg',
          price: 50
        },
        {
          id: 3,
          name: 'Товар 3',
          image: 'product3.jpg',
          price: 200
        },
      ],
    }
  },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => a.price + b.price);
    }
  },
  methods: {
    sortByPrice(ascending) {
      if (ascending) {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }
    }
  }
}
</script>

<template>
  <div>
    <button @click="sortByPrice(true)">Сортировать по увеличению цены</button>
    <button @click="sortByPrice(false)">Сортировать по уменьшению цены</button>
    <ProductsComponent v-for="(product, index) in sortedProducts" :key="index" :product="product"/>
  </div>
</template>

<style scoped lang="scss">

</style>