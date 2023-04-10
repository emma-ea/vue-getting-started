<template>
  <RouterLink to="/create-profile"><p>Create profile</p></RouterLink>
</template>

<script setup>
    function goToProfile() {
      this.$router.push('/create-profile')
    }
</script>

<style scoped>
    .p {
  text-align: center;
  margin-top: 20px;
  width: 200px;
  height: 40px;
  border: 1px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 12px;
}
</style>