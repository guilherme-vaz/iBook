<template>
  <div class="error-layout">
    <img src="@/assets/img/404.svg" alt="Erro 404 - Página não encontrada" />
    <p>A página que você está procurando <br> não existe ou foi removida</p>
    <NuxtLink to="/" class="button">Voltar para home</NuxtLink>
  </div>
</template>


<style lang="scss" scoped>

.error-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: #292929;

  p {
      padding-top: 3rem;
      text-align: center;
      line-height: 2rem;
      color: #F7F7F7;
  }

  .button {
      margin-top: 3rem;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      font-weight: 500;
      background-color: #F7F7F7;
      padding: 0.5rem;
      color: #292929;
  }
  
}
</style>