<template>
  <main>

    <div class="text-top"> Sejam bem vindos a melhor operadora de <b>internet, tv e telefone</b> do brasil</div>

    <div class="text-top"> <b>Segue os planos abaixo!</b></div>

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
  import ProductSummaryCard from '@/components/produtos/ProductSummaryCard.vue'
  import ProductDescriptionDrawer from '@/components/produtos/ProductDescriptionDrawer.vue'

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
   margin-top: 20px;
  }

  .text-top {
    margin: 10px;
    font-size: 22px;
    margin-bottom: 20px;
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
    #planos-internet {
      width: 370px;
    }
  }

</style>