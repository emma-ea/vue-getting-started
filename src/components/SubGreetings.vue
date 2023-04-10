<script setup>
import { onMounted, ref } from 'vue'

    defineProps({
        textmsg: {
            type: String,
            required: true,
        }
    })


let name = ref('')

onMounted(() => {
  name.value = localStorage.getItem('name')
})

</script>

<template>
    <h3 v-if="name" class="green">{{ textmsg }}, {{ name }}!</h3>
    <h3 v-else class="green"> {{ textmsg }}!</h3>
</template>

<style scoped>
    h3 {
        font-weight: bold;
        margin-left: 5px;
        margin-bottom: 2px;
    }
</style>