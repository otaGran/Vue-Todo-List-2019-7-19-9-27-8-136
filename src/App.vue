<template>
    <div id="ToDoList">
        <TodoListHeader></TodoListHeader>

        <todo-list-item :keys="index" :n="index" :item="item"
                        v-for="(item,index) in $store.getters.todoItems"></todo-list-item>
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
        },
        data(){
            return {
                fc: 0
            }
        }
    }
</script>

<style src="./assets/todolist.css">

</style>
