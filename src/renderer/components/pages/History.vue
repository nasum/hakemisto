<template>
  <div class="history">history</div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("Main");

export default Vue.extend({
  name: "history"
});
</script>

<style lang="scss" scoped>
</style>
