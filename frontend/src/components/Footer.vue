<template>
  <footer>
    <text class="text">2022 Copyright © - Jamal Frontend Developer.</text>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--color-text-light);
}
</style>