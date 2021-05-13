<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2>Sign Up</h2>

      <input
        type="text"
        id="name"
        placeholder="Name"
        v-model="data.name"
        required
      />
      <br />

      <input
        type="email"
        id="yourEmail"
        placeholder="Email address"
        v-model="data.email"
        required
      />

      <br />
      <input
        type="password"
        id="yourPassword"
        placeholder="Password"
        v-model="data.password"
        required
      />

      <br />

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
import { reactive } from "vue";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    });
    return {
      data,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
input[type="email"],
input[type="text"],
input[type="password"] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: auto;
}
input[type="submit"] {
  text-align: center;
  width: 25%;
  background-color: #705f83;
  color: white;
  padding: 14px 20px;
  margin: 15px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
margin-left: 40%;
}
input[type="submit"]:hover {
  background-color: #705f99;
}
</style>
