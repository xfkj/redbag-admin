<template lang="pug">
.main
  h1.title(slot="header") 学生列表({{count}})
  Table(stripe :columns="columns" :data="sts" ref="sts")
  Button(type="primary" @click="$refs.sts.exportCsv({filename: '学生列表'})") 导出数据

</template>

<script>
import {count, find} from 'api/students'

export default {
  data() {
    return {
      count: null,
      columns: [
        {title: '姓名', key: 'name'},
        {title: '手机', key: 'mobile'},
        {title: '城市', key: 'city'},
        {title: '画室', key: 'studio'}
      ],
      sts: []
    }
  },
  async created() {
    this.count = await count()
    this.sts = await find()
  }
}
</script>

<style scoped>
.main>* {
  margin-bottom: 16px;
}
.title {
  text-align: center;
  font-weight: normal;
}
</style>


