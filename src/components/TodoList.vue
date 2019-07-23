<template>
    <div id="ToDoList">
        <div id="sidebar">
            <ol>
                <router-link to="/myprofile" tag="li">MyProfile</router-link>
                <router-link to="/todolist" tag="li">TodoList</router-link>
            </ol>
        </div>

        <button @click="goBack">Back</button>
        <span id="name">{{$route.params.key}}</span>
        {{getTest}}
        <TodoTitle></TodoTitle>
        <AddTodo></AddTodo>
        <todo-list-item :item="item" :keys="index" :n="index"
                        v-for="(item,index) in $store.getters.todoItems"></todo-list-item>
        <todo-list-button></todo-list-button>
    </div>
</template>


<script>


    import AddTodo from "@/components/AddTodo";
    import TodoListItem from "@/components/TodoListItem";
    import TodoListButton from "@/components/TodoListButton";
    import TodoTitle from "@/components/TodoTitle";


    export default {
        name: "TodoList",
        components: {
            TodoTitle,
            TodoListButton,
            TodoListItem,
            AddTodo
        },
        mounted() {
            // axios
            //     .get('http://localhost:3001/todos')
            //     .then(response => {this.getTest = response.data})
            //     .catch(function (error) { // 请求失败处理
            //         alert(error);
            //     });
            this.$store.dispatch('getItem')


        },
        data() {
            return {
                getTest: ''
            }
        },
        methods: {
            goBack() {
                if (confirm("Press a button!")) {
                    this.$router.back();
                }

            }

        }
    }
</script>

<style scoped>
    #name {
        float: right;
    }

</style>
