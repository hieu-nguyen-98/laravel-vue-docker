<template>
  <div class="admin-app">
    <header>
      <!-- Navigation bar for Admin -->
    </header>

    <router-view></router-view>  <!-- Hiển thị các sub-routes ở đây -->
  </div>
</template>

<script>
export default {
  name: "AdminApp"
};
</script>

<style scoped>
/* Styles cho trang Admin */
</style>