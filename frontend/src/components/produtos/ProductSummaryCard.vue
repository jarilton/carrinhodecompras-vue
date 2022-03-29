<template>
  <div class="card"> 
    <h3>{{ product.name }}</h3>

    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" v-on:click="$emit('view-product', product)">Ver Produto</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0, 150)
    } 
  }
}
</script>

<style scoped>
  .card {
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--color-background);
    box-shadow: 0 0 5px gray;
  }

  .price {
    color: var(--color-text-dark);
  }

  .description {
    font-size: .85rem;
  }

  .text-muted {
    color: var(--color-text-dark);
  }

  .view-product-button {
    padding: 10px;
    background-color: var(--color-background-nav);
    border: none;
    color: var(--color-text-light);
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    .card {
      width: 350px;
      margin: 10px;
    }
  }

</style>