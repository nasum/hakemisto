<template>
  <el-container direction="vertical">
    <el-menu mode="horizontal" :router="true">
      <el-menu-item index="/">Browser</el-menu-item>
      <el-menu-item index="/history">History</el-menu-item>
      <el-menu-item index="/setting">Setting</el-menu-item>
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

