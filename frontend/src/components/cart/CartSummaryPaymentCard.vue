<template>
  <div class="cart-item-card">
    <h3>Total do Carrinho: R${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">
      Pagar com cartão de crédito
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

<style>
  .cart-item-card {
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