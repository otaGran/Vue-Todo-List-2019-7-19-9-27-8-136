<template>
    <div>
        <button v-on:click="clickAllButoon">All</button>
        <button v-on:click="clickActiveButoon">Active</button>
        <button v-on:click="clickCompleteButoon">Complete</button>
    </div>
</template>

<script>
    export default {
        name: "TodoListButton",
        methods:{
            clickAllButoon:function () {
                this.$emit("clickAllButoon");
            },
            clickActiveButoon:function () {
                this.$emit("clickActiveButoon");
            },
            clickCompleteButoon:function () {
                this.$emit("clickCompleteButoon");
            }

        }
    }
</script>

<style scoped>

</style>