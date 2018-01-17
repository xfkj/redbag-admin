<template lang="pug">
.main
  MyArea.area(v-for="a in areas" :area="a", :key="a.id" @save="save")
  Button.add(type="primary" shape="circle" icon="plus" @click="add")
</template>

<script>
import {find} from 'api/areas'
import Area from './Area'

export default {
  data() {
    return {
      areas: []
    }
  },
  async created() {
    this.areas = await find()
  },
  methods: {
    add() {
      if (this.areas.some(_ => !_.id)) return false
      this.areas.push({})
    },
    save(area) {
      const index = area.id ? this.areas.findIndex(_ => _.id === area.id) : this.areas.findIndex(_ => !_.id)
      this.areas.splice(index, 1, area)
      this.$Message.success('保存成功')
    }
  },
  components: {MyArea: Area}
}
</script>

<style scoped>
.area {
  margin-bottom: 32px;
  border-color: #5cadff;
}
.add {
  width: 56px;
  height: 56px;
  position: fixed;
  right: 8px;
  bottom: 8px;
  z-index: 10;
}
</style>

