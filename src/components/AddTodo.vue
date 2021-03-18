<template>
  <div>
      <form @submit.prevent="addTodo">
          <input type="text" v-model="title" name="title" placeholder="Todo">
          <input type="submit" value="Add" class="btn">
      </form>
  </div>
</template>

<script>
export default {
    name: "AddTodo",
    data(){
        return{
            title: ''
        }
    },
    methods: {
        addTodo(){
            let newTodo = {
            title: this.title,
            completed: false
        }
        //Send to parent
        this.$emit('add-todo', newTodo)

        //Clear the form
        this.title = ''
        }
        
    }
}
</script>

<style scoped>
    form {
        display: flex;
        padding-top: 2.5rem;
    }
    input[type="text"] {
        flex: 10;
        padding: .05rem;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>