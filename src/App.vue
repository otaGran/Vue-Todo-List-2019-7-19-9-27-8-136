<template>
    <div id="ToDoList">
        <TodoListHeader @addItem="addItem"></TodoListHeader>
        <todo-list-item :n="index" :item="item"  v-for="(item,index) in todoListItem"></todo-list-item>
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
        data() {
            return {
                todoListItem: []
            }
        },
        methods: {
            addItem : function(itemContent) {
                this.todoListItem.push({content:itemContent, isChecked: false});

            }
        }
    }
</script>

<style src="./assets/todolist.css">
    /*#app {*/
    /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*  margin-top: 60px;*/
    /*}*/
</style>
