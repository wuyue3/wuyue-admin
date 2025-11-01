<script setup>
import routes from '@/router/routes'
const menus = routes.filter((item) => {
  return !item.meta.hidden
})
</script>

<template>
  <div class="menus-container">
    <ul class="menus">
      <li v-for="menu in menus" :key="menu.path" class="menu-item">
        <i class="menu-item-icon"><component :is="menu.meta.icon"></component></i>
        <router-link :to="menu.path" class="menu">{{ menu.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menus-container {
  width: 100%;
  height: 100%;
}

.menus-container .menus {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  gap: 20px;
}

.menus-container .menus .menu-item {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.menus-container .menus .menu-item .menu-item-icon {
  display: flex;
  align-items: center;
}

.menus-container .menus .menu-item .menu {
  text-decoration: none;
  --tw-text-opacity: 1;
  color: rgb(117 117 117 / var(--tw-text-opacity, 1));
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s linear;
}

.menus-container .menus .menu-item .menu:hover {
  --tw-text-opacity: 1;
  color: rgb(57 224 121 / var(--tw-text-opacity, 1));
}
</style>
