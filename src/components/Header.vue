<template>
  <div class="header">
    <h1>TodoList</h1>
    <div class="links">
      <div class="two-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div class="register">
        <router-link to="/login">Log In</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.header {
  text-align: center;
  color: #fff;
  background: rgba(5, 2, 46, 0.664);
  padding-bottom: 2rem;
}
.links {
  display: flex;
  justify-content: space-between;
}
.register {
  margin-right: 2rem;
}
</style>