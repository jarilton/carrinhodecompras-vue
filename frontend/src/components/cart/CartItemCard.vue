<template>
  <div class="cart-item-card">
    <div class="header">
      <h3 class="name">{{ product.name }}</h3>
      <h4 class="quantity">Qtd de produtos: {{ product.quantity }}</h4>
      <h4 class="total-price">Total: R${{ item_cost.toFixed(2) }}</h4>
    </div>

    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0, 120)
    },
    item_cost() {
      return this.product.price * this.product.quantity
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 200px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  margin-bottom: 20px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }
  .quantity {
    margin: 10px 0;
  }
  .description {
    align-items: center;
    text-align: center;
    margin-top: 10px;
  }
}
</style>