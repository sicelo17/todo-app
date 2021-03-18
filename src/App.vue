<template>
  <div id="nav">
    <Header/>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ccc;
}

.btn {
  padding: .65rem;
  cursor: pointer;
  border: none;
  background-color: #705f83;
  color: #ccc;
}
.btn:hover {
  background-color: #705f99;
}
</style>
