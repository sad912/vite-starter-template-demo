<script setup lang="ts">
const a = 1
console.log(a)
</script>

<template>
  <router-link to="/">Index</router-link>
  |
  <router-link to="/test">Test</router-link>
  <router-view m-2></router-view>

</template>

<style scoped>
</style>
