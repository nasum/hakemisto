<template>
  <div class="explorer">
    <div v-for="(fileObj, index) in fileList" :key="index" class="item-wrapper">
      <div class="item">
        <div>
          <img
            class="item-img"
            v-if="fileObj.fileType.indexOf('image') >= 0"
            :src="'data:' + fileObj.fileType + ';base64,' + fileObj.data"
          />
          <i class="el-icon-document" v-else-if="fileObj.isFile"></i>
          <i class="el-icon-folder" v-else @dblclick="openFolder(fileObj.path)"></i>
        </div>
        <el-tooltip effect="dark" :content="fileObj.displayName" placement="bottom-start">
          <span>{{ fileObj.displayName }}</span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props:['fileList'],
  data() {
    return {
    }
  },
  methods: {
    openFolder(path: string){
      this.$emit('selectFolder',path)
    }
  }
})
</script>

<style lang="scss" scoped>
.explorer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item-wrapper {
  padding: 5px;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #f3f3f3;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  i {
    font-size: 70px;
  }

  .item-img {
    width: 70px;
    height: 70px;
    object-fit: scale-down;
  }
}
</style>


