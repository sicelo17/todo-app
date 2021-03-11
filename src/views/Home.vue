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
        this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo]; //Use a spread operator to copy the current todos and add the newTodo 
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    // axios.get() returns a promise 
      .then(res => this.todos = res.data) //this.todos refers to the empty array in data
      .catch(err => console.log(err))
  }
}
</script>
