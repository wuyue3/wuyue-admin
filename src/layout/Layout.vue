<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './header/index.vue'
</script>

<template>
  <header>
    <HeaderView></HeaderView>
  </header>
  <RouterView></RouterView>
</template>
