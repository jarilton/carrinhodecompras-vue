<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>

import './styles/global.css'
import Header from'./components/Header.vue'
import Home from'./pages/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>


