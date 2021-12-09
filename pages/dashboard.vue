<template>
  <div class="container">
    <div class="dash-container">
      <img src="@/assets/img/dashboard.svg" alt="Dashboard image" />
      <h1>Você está no <span>Dashboard</span></h1>
      <NuxtLink class="dash-button" to="/">Logout</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.dash-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    img {
        margin-bottom: 1rem;
        width: 120px;
        max-width: 130px;
    }

    h1 {
        color: #292929;
        font-size: 3rem;
        font-weight: normal;
        margin-bottom: 4rem;

        span {
            font-weight: bold;
        }
    }

    .dash-button{
        color: #F7F7F7;
        background-color: #292929;
        font-size: 1.2rem;
        padding: 0.5rem 1.5rem;
        border-radius: 0.1rem;
    }

}
</style>