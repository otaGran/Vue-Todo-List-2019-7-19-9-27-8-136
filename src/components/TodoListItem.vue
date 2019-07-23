<template>
    <div :class="{gray:item.isChecked}" id="ToDoListItem">
        <i>{{ item.id}}</i>
        <input @click.prevent="renderItem" type="checkbox" v-model="item.isChecked">
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

                //this.$store.commit('completed',this.item.id);
                this.$store.dispatch('putItem', this.item.id);
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
