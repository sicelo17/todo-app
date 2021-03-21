<template>
  <div>
    <form @submit.prevent="login">
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
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: '',
      password: ''
    });
    
    const router = useRouter();

    const login = async () => {
      await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          credentials: 'include', // essential for getting back a cookie
          body: JSON.stringify(data)
        });

        await router.push('/');
    }

    return {
      data,
      login
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