<template>
  <main>
    <section class="container">
      <h1>Carrinho</h1>

      <section class="carrinhos">
        <div class="carrinho" v-for="(carrinho, id) in carrinhos" :key="id">
            <a :href="carrinho.link" target="_blank">
            <img :src="carrinho.thumb" :alt="carrinho.name">
            <div  class="carrinho-name">{{ carrinho.name }}</div>
          </a> 
        </div>
      </section>
    </section>
  </main>
</template>

<script>
  import api from '@/services/api.js'

export default {
  name: "Carrinhos",
  data() {
    return {
      carrinhos: []
    }
  },
  mounted() {
    api.get("/carrinho")
      .then(response => {
        /* console.log(response.data); */
        this.carrinhos = response.data;
      })
  }
}
</script>

<style scoped>

main{
  align-items: center;
}

.carrinhos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carrinho {
  width: 80%;
  margin-bottom: 30px;
}

</style>