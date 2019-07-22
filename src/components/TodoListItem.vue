<template>
    <div :class="{gray:item.isChecked}" id="ToDoListItem">
        <i>{{ n+1}}</i>
        <input type="checkbox"  v-on:click="renderItem" v-model="item.isChecked">
        <!--{{item.isChecked}}-->
        <span v-on:keydown.enter="finishInput" :contenteditable="isContenteditable" v-on:dblclick="dbclicked">{{item.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "TodoListItem",
        props: ['n', 'item'],
        data() {
            return {
                fk:false,
                isContenteditable: false
            }
        },
        methods: {
            renderItem: function () {

                this.$store.commit('completed',this.n);
            },
            dbclicked: function () {
                this.isContenteditable = true;
            },
            finishInput: function () {
                this.isContenteditable = false;
            }
        }



    }
</script>

<style scoped>

</style>
