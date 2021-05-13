<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>LogIn</h2>
      <label for="email">Email</label>
      <input
        type="email"
        id="yourEmail"
        placeholder="Enter your email address"
        v-model="email"
      />

      <label for="pwd">Password</label>
      <input
        type="password"
        id="yourPassword"
        placeholder="Enter your Password"
        v-model="password"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return {
       email: '',
       password: ''
    }
  },
  methods: {
    handleSubmit() {
            let data = {
                email: this.email,
                password: this.password,
            }
            axios.post('https://jsonplaceholder.typicode.com/users', data)
                .then(res => console.log(res))
                .catch(err => console.log(err))
  }
}
}
</script>

<style scoped>
h2 {
    text-align: center;
}
input[type="email"],
input[type="password"] {
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="submit"] {
  width: 30%;
  background-color: #705f83;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #705f99;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>