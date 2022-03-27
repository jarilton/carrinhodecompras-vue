<template>
  <main>
    <section class="container">
      <h1>Produtos</h1>

      <section class="produtos">
        <div class="produto" v-for="(produto, id) in produtos" :key="id">
          <a :href="produto.link" target="_blank">
            <img :src="produto.thumb" :alt="produto.name">
            <div  class="produto-name">{{ produto.name }}</div>
          </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
  import api from '@/services/api.js'

export default {
  name: "Produtos",
  data() {
    return {
      produtos: []  
    }
  },
  mounted() {
    api.get("/produtos")
      .then(response => {
        this.produtos = response.data;
      })
  },
 }
</script>

<style scoped>

main {
  align-items: center;
}

.produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.produto {
  width: 80%;
  margin-bottom: 30px;
}

.produto img {
  width: 100%;
}

.produto a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

@media (min-width: 700px) {
  .produtos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .produto {
    margin-left: 30px;
    width: 300px;
  }
}

</style>