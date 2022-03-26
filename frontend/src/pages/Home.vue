<template>
  <main>

    <div class="text-top"> Sejam bem vindos a melhor operadora de <b>internet, tv e telefone</b> do brasil</div>

    <div class="text-top"> <b>Clique abaixo para acessar os planos</b></div>

    <a href="/produtos" target="_blank">
      <img src="@/assets/button-acesso.jpg" alt="ver planos" id="planos-internet">
    </a>

    <div class="text-bottom">jamalnet.com.br</div>

  </main>
</template>

<script>
export default {
  name: 'Home'  
}
</script>

<style scoped>

  main {
    justify-content: center;
    align-items: center;
  }

  .text-top {
    margin: 10px;
    font-size: 22px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #planos-internet {
    width: 340px;
  }

  .text-bottom {
    margin: 30px;
    font-size: 18px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 700px) {
    #planos-internet {
      width: 370px;
    }
  }

</style>