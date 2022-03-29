<template>
  <main class="container">
    <h1>Contato</h1>

    <div class="text-top">
      <h2>Email: jariltonpereira02@hotmail.com</h2>
      <h2>GitHub: https://github.com/jarilton</h2>
      <h2>Telefone whatsApp: (16) 99348-7729</h2>
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
  height: 100vh;
}

.text-top {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 70px;
}

h2 {
  margin-bottom: 20px;
}

</style>