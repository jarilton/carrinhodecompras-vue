<template>
  <div class="home-page">
    <Banner />

    <div class="text-top">
      Sejam bem vindos a melhor operadora de <b>internet, tv e telefone</b> do
      brasil
    </div>

    <div class="text-top"><b>Aqui você encontra os melhores planos!!</b></div>

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
  </div>
</template>

<script>
import api from '@/services/api.js'
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '@/components/products/ProductDescriptionDrawer.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
    Banner,
  },
  data() {
    return {
      products: [],
      product: null,
      active: {
        product_drawer: false,
      },
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
    },
  },
  mounted() {
    api.get('/products').then((response) => {
      this.products = response.data
      /* console.log(response.data); */
    })
  },
}
</script>

<style scoped>
.home-page {
  align-items: center;
}

.title {
  font-weight: bold;
  font-size: 60px;
  text-align: center;
}

.text-top {
  margin-top: 35px;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.product-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .home-page {
    width: 100%;
  }
  .product-cards-container {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    flex-direction: inherit;
    padding: 0 20px;
  }
}
</style>
