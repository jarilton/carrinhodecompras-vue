<template>
  <footer>

    <text class="text" id="texto">Desenvolvido por Jamal Frontend Developer</text>

  </footer>
</template>

<script>
  export default {
    name: 'Footer',  
  }
</script>

<style scoped>

  footer {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #texto{
    color: var(--color-text-light); 
  }

</style>