<template>
  <header>

    <nav class="container">

    <a href="/"><img alt="Carrinho de compras" id="logo" src="@/assets/logo.jpg" /> </a>

    <img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="@/assets/button-logo.jpg" />

    <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"/> 

    <div id="menu-items" :class="{active:menuActive}" >

      <img alt="Carrinho de compras" id="menu-logo" src="@/assets/logo.jpg" />

      <ul>
        <li><a><router-link to="/">Home</router-link></a></li>
        <li><a><router-link to="/cart">Carrinho</router-link></a></li>
        <li><a><router-link to="/contacts">Contato</router-link></a></li>
      </ul>
    </div>

    </nav>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    openMenu: function() {
      this.menuActive = true;
    },
    closeMenu: function() {
      this.menuActive = false;
    }
  }
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
    height: 60px;
    align-items: center;
  }

  #logo {
    width: 60px;
  }

  #menu-button {
    width: 60px;  
    height: 60px;
  }

  #menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.8;
  }

  #menu-logo {
    width: 40%;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  #menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-items.active {
    display: flex;
  }

  ul {
    list-style: none;
    text-align: center;
  }

  ul li {
    margin: 20px 0;
  }

  ul li a {
    color: var(--color-text-light);
  }

  @media (min-width: 700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay {
      display: none;
    }

    #menu-items {
      display: flex;
      position: static;
      height: 60px;
      width: auto;
    }

    ul {
      display: flex;
      height: 60px;
      align-items: center;
    }

    ul li {
      margin: 0;
      margin-left: 20px;
    }
  } 

</style>