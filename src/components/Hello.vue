<script>
    export default {
        data() {
            return {
                message: "Hello,  there"
            }
        },
        computed: {
            text() {
                return this.message
            }
        }
    }
</script>

<template>
    <h3 class="green"> {{ text }}</h3>
</template>

<style scoped>
    h3 {
        font-weight: bold;
        margin-left: 5px;
    }
</style>