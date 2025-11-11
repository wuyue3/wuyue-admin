<script setup>
import { onMounted } from 'vue'
import MenuBar from './MenuBar.vue'
import drawImage from '@/utils/drawImage'

onMounted(() => {
  drawImage()
  drawImage(520, 380, '#fff000')
})
</script>

<template>
  <div class="header-container"><MenuBar /></div>
</template>

<style scoped>
.header-container {
  height: 64px;
  background-color: #ffffff;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
