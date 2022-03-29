<template>
  <div class="cart">
    <h1>Carrinho</h1>

    <CartItemCard 
      v-for="product in products"
      :key="product.id"
      :product="product"
    />

    <CartSummaryPaymentCard />

  </div>
</template>

<script>
import CartItemCard from '@/components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '@/components/cart/CartSummaryPaymentCard.vue'

export default {
  components: {
    CartItemCard, CartSummaryPaymentCard
  },
  computed: {
    products() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style>
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}

@media (min-width: 700px) {
  .cart {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
}

</style>