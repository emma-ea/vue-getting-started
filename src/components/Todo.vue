<script>

    let id = 0;

    export default {
        data() {
            return {
                newTodo: '',
                todos: [
                    {id: id++, task: 'Example task'}
                ],
            }
        },
        methods: {
            addTodo() {
                let todo = {
                    id: id++,
                    task: this.newTodo,
                }
                this.todos.push(todo)
                this.newTodo = ''
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((t) => t.id != todo.id)
            }
        }
    }
</script>

<template>
    <h3>Todo Items</h3>
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
        color: green;
        font-size: 32px;
    }

    .todo {
        margin-left: 12px;
        padding: 14px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 6px;
        border: 0px;
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