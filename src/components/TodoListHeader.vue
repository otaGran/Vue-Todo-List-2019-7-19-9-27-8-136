<template>
    <div>
        <h1>Jquery To Do List</h1>
        <p><em>Simple Todo List with adding and filter by diff status.</em></p>
        <span>
        <input type="text" v-on:keydown.enter="addItem" v-model="itemContent"><button v-on:click="addItem">Add</button>
    </span>
    </div>
</template>

<script>

    
    export default {
        name: "TodoListHeader",
        data() {
            return {
                itemContent: ""
            }
        },
        methods: {
            addItem: function () {

                // this.$emit("addItem",this.itemContent)
                this.$store.commit('addItem', this.itemContent);
                this.itemContent = '';
            }
        }
    }
</script>

<style scoped>

</style>
