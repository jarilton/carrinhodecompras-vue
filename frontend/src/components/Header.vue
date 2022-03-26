<template>
  <header>

    <nav class="container">

    <a href="/"><img alt="Carrinho de compras" id="logo" src="../assets/logo.jpg" /> </a>

    <img alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" />

    </nav>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav{
    display: flex;
    justify-content: space-between;
  }

  #logo {
    width: 60px;
  }

  #menu-button {
    width: 30px;
  }
</style>