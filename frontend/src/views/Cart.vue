<template>
  <div class="cart">
    <h1 class="title">Carrinho</h1>

    <div class="cart-cards">
      <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="cart-total-price">
      <CartSummaryPaymentCard />
    </div>
  </div>
</template>

<script>
import CartItemCard from '@/components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '@/components/cart/CartSummaryPaymentCard.vue'

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems
    },
  },
}
</script>

<style scoped>
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .cart {
    display: block;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .cart-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 40px;
  }
}
</style>
