<template>
    <div>
        <span>Welcome to TodoList</span>
        <span>
        <input>
        <button @click="gotoTodoList">Go to todoList</button>

    </span>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        methods: {
            gotoTodoList() {
                this.$router.push({name: 'todolist', params: {key: 'Alex'}})
            }
        }

    }
</script>

<style scoped>

    input {
        display: block
    }

</style>
