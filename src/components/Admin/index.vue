<template lang="pug">
  div
    .sider
      AppMenu
    .content
      router-view
</template>

<script>
import Menu from './Menu'
  export default {
    components: {AppMenu: Menu}
  }
</script>

<style scoped>
.sider {
  width: 240px;
  height: 100%;
  position: fixed;
  background: #495060;
}
.content {
  margin-left: 240px;
  padding: 32px;
  padding-bottom: 96px;
}
</style>

