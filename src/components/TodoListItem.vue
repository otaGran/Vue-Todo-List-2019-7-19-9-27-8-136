<template>
    <div :class="{gray:isChecked}">
        <i >{{ n }}</i>
        <input type="checkbox" v-on:click="renderItem">
        <span  >{{item.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "TodoListItem",
        props:['n','item'],
        data(){
            return{
                isChecked: false
            }
        },
        methods:{
            renderItem:function () {
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>

<style scoped>

</style>