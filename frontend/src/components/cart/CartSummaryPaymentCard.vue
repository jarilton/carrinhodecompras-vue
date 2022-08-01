<template>
  <div class="cart-summary">
    <h3>Total do Carrinho: R${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">
      Pagar 
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>
  .cart-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .view-product-button{
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    margin-top: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
  }
</style>