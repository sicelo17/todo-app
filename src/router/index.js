import { createWebHistory, createRouter  } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../auth/Login.vue'
import Register from '../auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
