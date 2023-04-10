<script setup>
import SubTitle from './SubGreetings.vue';

defineProps({
  heading: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    default: 'Hello, there!',
  }
})
</script>

<template>
  <div class="greetings">
    <SubTitle :textmsg="sub" />
    <h1 class="green">{{ heading }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
