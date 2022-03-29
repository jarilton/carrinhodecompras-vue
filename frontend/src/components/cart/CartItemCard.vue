<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4 class="quantity">Qtd de produtos: {{ product.quantity }}</h4>
      <h4>Custo Total: R${{ item_cost.toFixed(2) }}</h4>
    </div>

    <p>{{ description }}</p>

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
    }
  }
}
</script>

<style lang="scss">
  .cart-item-card {
    width: 100%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
    margin-bottom: 20px;
    
    .header {
      display: flex;
      justify-content: space-around;
    }
  }

  @media (min-width: 700px) {
    .cart-item-card {
      width: 100vw;
    }

    .header {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .quantity {
      margin-top: 10px;
    }
  }
</style>