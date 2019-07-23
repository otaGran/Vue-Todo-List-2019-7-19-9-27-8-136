<template>
    <div>
        <span>Welcome to TodoList</span>
        <span>
        <input v-model="name">
        <button @click="gotoTodoList">Go to todoList</button>

    </span>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data(){
            return{
                name:''
            }
        },
        methods: {
            gotoTodoList() {
                this.$router.push({name: 'todolist', params: {key: this.name}})
            }
        }

    }
</script>

<style scoped>

    input {
        display: block
    }

</style>
