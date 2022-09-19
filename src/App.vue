<template>
  <div class="app">
    <router-view></router-view>
  </div>
  <TabBar></TabBar>
</template>

<script setup>
import TabBar from "./components/tab-bar.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<style scoped></style>
