<template>
  <div>
    <h1>Counter: {{ $store.state.counter }}</h1>
    <button class="btn" @click="$store.dispatch('decrement')">-</button>
    <button class="btn" @click="$store.dispatch('increment')">+</button>

    <p>Message: {{ $store.state.message }}</p>
    <button @click="$store.dispatch('processMessage')">Get Message</button>

    <hr />

    <h3>Is Logged In: {{ $store.state.auth.isLoggedIn }}</h3>
    <button @click="loginMe()">Login</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    loginMe() {
      this.$store.dispatch('auth/login', { value: false })
    },
  },
}
</script>

<style scoped>
.btn {
  padding: 5px;
  width: 30px;
  font-size: 20px;
}
</style>
