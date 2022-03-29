<template>
  <div class="card"> 
    <h3>{{ product.name }}</h3>

    <h5 class="price">Preço: R${{ product.price.toFixed(2) }}</h5>
    <p class="description">Descrição: {{ description }}</p>
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

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px gray;
  }

  .price {
    color: var(--color-text-dark);
    margin-top: 10px;
  }

  .description {
    font-size: .85rem;
    margin-top: 10px;
  }

  .text-muted {
    color: var(--color-text-dark);
    margin-top: 10px;
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
    margin-top: 10px;
  }

  @media (min-width: 700px) {
    .card {
      width: 100vw;
      margin: 10px;
    }
  }

</style>