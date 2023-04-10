<script setup>

    import { ref, reactive } from 'vue'

    let id = ref(0);

    let newTodo = ref('');

    let todos = reactive([
        {id: id.value++, task: 'Example task'}
    ]);

    function addTodo() {

        if (newTodo.value.length === 0) {
            alert("You can't add a todo without entering one")
            return
        }

        let todo = {
            id: id.value++,
            task: newTodo.value,
        }
        todos.push(todo)
        newTodo.value = ''
    }

    function removeTodo(todo) {
        todos = todos.filter((t) => t.id != todo.id)
        console.log(todos)
    }

</script>

<template>
    <h3 class="green">Todo Items</h3>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo"/>
        <button class="todo">Add todo</button>
    </form>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.task }}
            <button class="remove" @click="removeTodo(todo)">remove</button>
        </li>
    </ul>
</template>

<style scoped>
    h3 {
        font-weight: bold;
        font-size: 32px;
    }

    .remove {
        background-color: rgba(255, 0, 0, 0.651);
        color: white;
        font-size: 14px;
        font-weight: bold;
        border: 0px;
        border-radius: 6px;
        margin-left: 22px;
        padding: 10px 20px;
    }

    input {
        padding: 12px;
        border-radius: 6px;
        width: 300px;
    }

    ul {
        margin-top: 32px;
    }

    li {
        font-size: 22px;
        margin-top: 10px;
    }

</style>