<script setup>

import { onMounted, ref } from 'vue'

let name = ref('');

onMounted(() => {
    name.value = localStorage.getItem('name')
})

function storeName() {
    localStorage.setItem('name', name.value)
    alert('profile saved!')
}

</script>

<template>
    <div>
        <header> Name: </header>
    </div>

    <form @submit.prevent="storeName">
        <input v-model="name"/>
        <button class="todo">Save!</button>
    </form>
</template>

<style scoped>
    button {
        margin-top: 10px;
        margin-left: 2px;
        padding-left: 40px;
        padding-right: 40px;
    }
</style>
