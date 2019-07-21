<template>
    <div :class="{gray:item.isChecked}" id="ToDoListItem">
        <i >{{ item.cindex }}</i>
        <input :checked="item.isChecked" type="checkbox" v-on:click="renderItem">
        <span v-on:keydown.enter="finishInput" :contenteditable="isContenteditable" v-on:dblclick="dbclicked" >{{item.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "TodoListItem",
        props:['item'],
        data(){
            return{
                isChecked: false,
                isContenteditable:false
            }
        },
        methods:{
            renderItem:function () {
                this.isChecked = !this.isChecked;
                this.$emit("completed",this.item.cindex);
            },
            dbclicked : function () {
                this.isContenteditable = true;
            },
            finishInput : function () {
                this.isContenteditable = false;
            }
        }
    }
</script>

<style scoped>

</style>