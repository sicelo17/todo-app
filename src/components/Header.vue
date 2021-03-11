<template>
  <div class="header">
    <h1>TodoList</h1>
    <router-link  to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        text-align: center;
        color: #fff;
        background: rgba(5, 2, 46, 0.664);
    }
</style>