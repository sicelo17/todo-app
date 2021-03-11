<template>
  <div id="nav">
    <Header/>
  </div>
</template>
<script>
import Header from "./components/Header"
export default {
  components: {
    Header
  }
}
</script>
<style>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
