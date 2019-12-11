<template>
  <div class="explorer">
    <el-input placeholder="Please input" v-model="currentPath">
      <template slot="prepend">Path</template>
    </el-input>
    <div class="file-list">
      <div v-for="(fileObj, index) in fileList" :key="index" class="item-wrapper">
        <div class="item">
          <div>
            <img
              class="item-img"
              v-if="fileObj.fileType.indexOf('image') >= 0"
              :src="'data:' + fileObj.fileType + ';base64,' + fileObj.data"
              @dblclick="doubleClickFile(fileObj.path)"
            />
            <i class="el-icon-document" v-else-if="fileObj.isFile" @dblclick="doubleClickFile(fileObj.path)"></i>
            <i class="el-icon-folder" v-else @dblclick="clickFolder(fileObj.path)"></i>
          </div>
          <el-tooltip effect="dark" :content="fileObj.displayName" placement="bottom-start">
            <span>{{ fileObj.displayName }}</span>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("Explorer");

export default Vue.extend({
  name: "explorer",
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    ...mapState(["currentPath", "fileList"])
  },
  methods: {
    ...mapActions(["initialize", "setFileList", "selectFolder", "selectFile"]),
    clickFolder(path: string) {
      this.$router.push("/explorer" + path);
    },
    doubleClickFile(path: string) {
      this.selectFile(path);
    }
  },
  mounted() {
    this.initialize();
  },
  beforeRouteUpdate(to, from, next) {
    this.selectFolder(to.params.pathMatch);
    next();
  }
});
</script>

<style lang="scss" scoped>
.file-list {
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
