<template>
  <el-container class="setting">
    <el-aside>
      <el-menu :router="true" class="setting-menu">
        <el-menu-item index="1" :route="{ name:'default_application' }">
          <i class="el-icon-menu"></i>
          <span>Default Application</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.setting {
  height: 100%;
  &-menu {
    height: 100%;
  }
}
</style>