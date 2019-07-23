<template>
    <router-view></router-view>
</template>

<script>

    import AddTodo from "@/components/AddTodo";
    import TodoListItem from "@/components/TodoListItem";
    import TodoListButton from "@/components/TodoListButton";
    import TodoTitle from "./components/TodoTitle";
    import Welcome from "./components/Welcome"
    import axios from 'axios'

    export default {
        name: 'app',
        data() {
            return {
                getTest: ''
            }
        },
        components: {
            TodoTitle,
            TodoListButton,
            TodoListItem,
            AddTodo,
            Welcome
        },
        mounted() {
            this.$router.push({path: "/123"})
        }
    }
</script>

<style src="./assets/todolist.css">

</style>
