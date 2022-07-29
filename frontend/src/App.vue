<template>
  <div id="app">
    <Header />
    <router-view />
    <client-only>
      <Footer />
    </client-only>
  </div>
</template>

<script>
import './styles/global.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  },
}
</script>


