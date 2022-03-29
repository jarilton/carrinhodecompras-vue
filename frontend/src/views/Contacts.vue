<template>
  <main class="container">
    <h1>Contato</h1>

    <div class="text-top">
      <h2>Email: jariltonpereira02@hotmail.com</h2>
      <h2>GitHub: https://github.com/jarilton</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contato",
}
</script>

<style scoped>

.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  margin-left: 130px;;
}

.text-top {
  margin-top: 70px;
  margin: 20px;
}

h2 {
  margin-bottom: 20px;
}

@media (min-width: 700px) {
  .container {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
}
</style>