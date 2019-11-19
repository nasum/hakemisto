<template>
  <el-container direction="vertical" class="default-layout">
    <el-menu mode="horizontal" :router="true">
      <el-menu-item index="/explorer">Browser</el-menu-item>
      <el-menu-item index="/history">History</el-menu-item>
      <el-menu-item index="/setting">Setting</el-menu-item>
    </el-menu>
    <el-main class="default-layout-main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout"
});
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  &-main {
    height: 100%;
    padding: 0;
  }
}
</style>