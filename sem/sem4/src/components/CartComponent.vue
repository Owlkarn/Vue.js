<script>
export default {
  name: "CartComponent",
  data() {
    return {
      cartItems: [
        {quantity: 2, price: 10},
        {quantity: 2, price: 15}
      ],
      total: 0
    };
  },
  methods: {
    updateTotal() {
      this.total = this.cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    }
  },
}
</script>

<template>
  <div>
    <div v-for="(item, index) in cartItems" :key="index">
      <input type="number" v-model="item.quantity" @change="updateTotal" />
      <p>Price: {{ item.price }}</p>
      <p>Subtotal: {{ item.quantity * item.price }}</p>
    </div>
    <div>
      Total: {{ total }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>