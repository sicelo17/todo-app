<template>
  <div>
      <form @submit.prevent="onSubmit">
      <h2>Sign Up</h2>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        v-model="data.name"
        required
      />

      <label for="email">Email address</label>
      <input
        type="email"
        id="yourEmail"
        placeholder="Email address"
        v-model="data.email"
        required
      />

      <label for="lname">Password</label>
      <input
        type="password"
        id="yourPassword"
        placeholder="Password"
        v-model="data.password"
        required
      />

      <label for="lname">Confirm Password</label>
      <input
        type="password"
        id="yourPassword2"
        placeholder="Confirm Password"
        v-model="data.password_confirm"
        required
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import{ useRouter } from 'vue-router'
export default {
    name: 'Register',
    setup() {
      const data = reactive({
        name: '',
        email: '',
        password: '',
        password_confirm: ''
      });

      const router = useRouter();

      const onSubmit = async () => {
          await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });

        await router.push('/login');
      }

      return {
        data,
        onSubmit
      }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}

input[type="email"],
input[type="text"],
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