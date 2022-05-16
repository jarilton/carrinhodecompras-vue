<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    v-on:click="$emit('close-product-drawer')"
  />

  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>

    <div v-if="product" class="product-details">
      <h3 class="text-center">{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <h3 class="text-center">R${{ product.price.toFixed(2) }}</h3>

      <div class="cart-total" v-if="product_total">
        <h3>Carrinho: {{ product_total }}</h3>
      </div>

      <div class="button-container">
        <button class="remove" @click="removeFromCart()">Remover</button>
        <button class="add" @click="addToCart()">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 0;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 30px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: rgba(124, 124, 124, 0.55);
  }
}

.product-details {
  p.description {
    text-align: center;
    padding: 20px;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }

  .text-center {
    margin-bottom: 10px;
    text-align: center;
  }

  .cart-total {
    margin-bottom: 15px;
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85px;
      height: 45px;
      border-radius: 5px;
      background-color: var(--color-background-nav);
      color: var(--color-text-light);
      cursor: pointer;

      &.remove {
        background-color: red;
      }
    }
  }
}

@media (min-width: 700px) {
  .drawer {
    width: 450px;
  }

  .button-container {
    button {
      justify-content: space-between;
    }
  }

  .text-center {
    margin-top: 20px;
  }
}
</style>
