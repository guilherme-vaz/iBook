<template>
  <div class="container">
    <div class="login-container">
      <!-- Header   -->
      <div class="login-header">
        <img src="@/assets/img/logo.svg" alt="" />
        <h3>Bem-vindo(a) ao Dashboard</h3>
        <h2>Entre na sua conta</h2>
      </div>

      <!-- Form -->
      <form class="form" method="post" @submit.prevent="userLogin">

        <input  v-model="login.email" type="email" id="email" placeholder="johndoe@gmail.com" required />

        <input  v-model="login.password" type="password" id="password" placeholder="Senha" required />

        <button type="submit" class="login-button" to="/"> Entrar </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: #292929;
  max-width: 350px;
  height: 50vh;
  padding: 3rem;
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.16);

  img {
    width: 90px;
    max-width: 500px;
    margin-bottom: 2rem;
  }

  h3 {
    color: #f0f0f0;
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: #f0f0f0;
    font-weight: 600;
  }
}

.form {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 1rem;

  input {
    padding: 0.5rem 1rem;

    background-color: transparent;
    border: 2px solid #f7f7f7;
    border-radius: 5rem;

    width: 100%;
  }

  input::placeholder {
    font-size: 0.8rem;
  }

  .login-button {
    padding: 0.5rem 1rem;

    color: #292929;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 5rem;

    background-color: #f0f0f0;
  }
}
</style>