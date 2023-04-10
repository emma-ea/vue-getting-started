<script setup>
import AppTitle from './components/TitleGreetings.vue'
import TodoView from './components/Todo.vue'
import VerticalLine from './components/VerticalLineBreak.vue'
import CreateProfileButton from './components/GotoProfileButton.vue'

import { ref } from 'vue'

const title = ref('Create your todos');
const sub = ref('Here you go');

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <AppTitle :heading="title" :sub="sub" />
    </div>
    <VerticalLine/>
  </header>

  <main>
    <TodoView/>
  </main>

  <section>
    <CreateProfileButton/>
    <RouterView></RouterView>
  </section>
  

</template>

<style scoped>
header {
  line-height: 1.5;
}

section {
  margin-left: 80%;
  margin-top: 10%;
  margin-bottom: 10%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin-right: 60px;
  }
}
</style>
