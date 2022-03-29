<template>
  <main>
    <h1 class="title"> Jamal Net Fibra</h1>

    <div class="text-top"> Sejam bem vindos a melhor operadora de <b>internet, tv e telefone</b> do brasil</div>

    <div class="text-top"> <b>Aqui você encontra os melhores planos!!</b></div>

    <ProductDescriptionDrawer 
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />

    <div class="product-cards-container">
      <ProductSummaryCard 
        v-for="product in products"
        :key="product.id"
        :product="product" 
        v-on:view-product="viewProduct($event)"
      />
    </div>

  </main>
</template>

<script>
  import api from '@/services/api.js'
  import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'
  import ProductDescriptionDrawer from '@/components/products/ProductDescriptionDrawer.vue'

export default {
  name: 'Home',
  components: {
    ProductSummaryCard, ProductDescriptionDrawer
  },
  data() {
    return {
      products: [],
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
      console.log(this.product) 
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    }
  },
  mounted() {
    api.get("/products")
      .then(response => {
        this.products = response.data;
        /* console.log(response.data); */
      })
  }

}
</script>

<style scoped>

  main {
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 60px;
    text-align: center;
  }

  .text-top {
    margin: 10px;
    font-size: 22px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .product-cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 700px) {
    main {
      width: 100%;
      
    }
  }

</style>