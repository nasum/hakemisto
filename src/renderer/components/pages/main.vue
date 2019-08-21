<template>
  <el-container direction="vertical">
    <el-menu mode="horizontal">
      <el-menu-item index="1">
        Browse
      </el-menu-item>
      <el-menu-item index="2">
        History
      </el-menu-item>
      <el-menu-item index="3">
        Setting
      </el-menu-item>
    </el-menu>
    <el-main>
      <Explorer :fileList="fileList" @selectFolder="selectFolder" />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Explorer from '@renderer/components/organisms/Explorer.vue'
import Vue from 'vue'
import {createNamespacedHelpers} from 'vuex'

const { mapState, mapActions} = createNamespacedHelpers('Main')

export default Vue.extend({
  components: {
    Explorer
  } ,
  computed: {
    ...mapState(['fileList'])
  },
  methods: {
    ...mapActions(['initialize','setFileList', 'selectFolder'])
  },
  mounted() {
    this.initialize()
  }
})
</script>

