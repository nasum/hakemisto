<template>
  <el-container direction="vertical">
    <el-menu mode="horizontal">
      <el-menu-item index="1">Browse</el-menu-item>
      <el-menu-item index="2">History</el-menu-item>
      <el-menu-item index="3">Setting</el-menu-item>
    </el-menu>
    <el-main>
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

