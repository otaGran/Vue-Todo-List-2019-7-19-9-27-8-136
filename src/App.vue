<template>
    <div id="ToDoList">
        <TodoListHeader @addItem="addItem"></TodoListHeader>
        <todo-list-item @completed="completed"  :item="item"  v-for="(item) in filteredTodoListItems(todoListItems)"></todo-list-item>
        <todo-list-button @clickAllButoon="clickAllButoon" @clickActiveButoon="clickActiveButoon" @clickCompleteButoon="clickCompleteButoon"></todo-list-button>
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
                count:0,
                todoListItems: [],
                isActived: false,
                isCompleted: false
            }
        },
        methods: {
            addItem : function(itemContent) {
                this.todoListItems.push({content:itemContent, isChecked: false,cindex:this.count++});

            },
            clickAllButoon : function () {
                this.isActived=false;
                this.isCompleted= false;
            },
            clickActiveButoon:function () {
                this.isActived=true;
                this.isCompleted= false;
            },
            clickCompleteButoon : function () {
                this.isActived=false;
                this.isCompleted= true;
            },
            completed:function (index) {
                this.todoListItems[index].isChecked=!this.todoListItems[index].isChecked;


            },
            filteredTodoListItems: function (itemList) {
                if(this.isActived){
                    return itemList.filter(v=>{
                        if(v.isChecked)
                            return true;
                        else
                            return false;
                    });
                }else if(this.isCompleted){
                    return  itemList.filter(v=>{
                        if(!v.isChecked)
                            return true;
                        else
                            return false;
                    });
                }else{
                    return  itemList;
                }
            }
            

        },
        computed: {

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
