<script setup>

    defineProps({
        textmsg: {
            type: String,
            required: true,
        }
    })

</script>

<template>
    <h3 class="green"> {{ textmsg }}</h3>
</template>

<style scoped>
    h3 {
        font-weight: bold;
        margin-left: 5px;
        margin-bottom: 2px;
    }
</style>