<template>
  <div>
      <form @submit.prevent="onSubmit">
      <h2>Sign Up</h2>
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        placeholder="First Name"
        v-model="firstName"
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        placeholder="Last Name"
        v-model="lastName"
      />

      <label for="email">Email address</label>
      <input
        type="email"
        id="yourEmail"
        placeholder="Email address"
        v-model="email"
      />

      <label for="lname">Password</label>
      <input
        type="password"
        id="yourPassword"
        placeholder="Password"
        v-model="password"
      />

      <label for="lname">Confirm Password</label>
      <input
        type="password"
        id="yourPassword2"
        placeholder="Confirm Password"
        v-model="password_confirm"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data(){
        return{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    },
    methods: {
        onSubmit() {
            let data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            }
            axios.post('https://jsonplaceholder.typicode.com/users', data)
                .then(res => console.log(res))
                .catch(err => console.log(err))

            this.$router.push('/login')
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