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
        methods: {
            clickAllButoon: function () {
                this.$store.commit('setAll');
            },
            clickActiveButoon: function () {
                this.$store.commit('setActived');
            },
            clickCompleteButoon: function () {
                this.$store.commit('setComplete');
            }

        }
    }
</script>

<style scoped>

</style>
