<template>
  <div class="home">
    <AddTodo @add-todo="addTodo"/>
   <Todos :todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>

import Todos from "../components/Todos"
import AddTodo from "../components/AddTodo"
import axios from "axios"
export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  }, 
  data() {
    return{
      todos: []
    }
  },
  methods: {
    deleteTodo(id){
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        // eslint-disable-next-line no-unused-vars
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err))
    },
    addTodo(newTodo){
      let { title, completed} = newTodo //use destructuring to pull out the single items
      axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed }) //returns a promise

      .then(res => this.todos = [...this.todos, res.data]) //Use a spread operator to copy the current todos and add the newTodo 
      .catch(err => console.log(err))
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    // axios.get() returns a promise 
      .then(res => this.todos = res.data) //this.todos refers to the empty array in data
      .catch(err => console.log(err))
  }
}
</script>
