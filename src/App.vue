<template>
  <div id="app">
    <TodoListHeader></TodoListHeader>
    <todo-list-item v-for="n in 5"></todo-list-item>
    <todo-list-button></todo-list-button>
  </div>
</template>

<script>

import TodoListHeader from "@/components/TodoListHeader";
import TodoListItem from "@/components/TodoListItem";
import TodoListButton from "@/components/TodoListButton";

export default {
  name: 'app',
  components: {
    TodoListButton,
    TodoListItem,
    TodoListHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
