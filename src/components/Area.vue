<template lang="pug">
Card
  input.title(v-model="area.name" slot="title" placeholder="地区的名字")
  Row.row(:gutter="24")
    Col(span="6")
      Input(placeholder="30.00000" v-model.number="area.latitude")
        span(slot="prepend") 维度:
    Col(span="6")
      Input(placeholder="120.00000" v-model.number="area.longitude")
        span(slot="prepend") 经度:
    Col(span="6")
      Input(v-model.number="area.radius")
        span(slot="prepend") 半径:
        span(slot="append") 公里
    Col.save(span="6")
      Button(type="primary" @click="save(area)") 保 存
      span(v-if="area.id")
        Button.button(v-if="area.active" type="success" @click="update({active: false})") 关 闭
        Button.button(v-else type="success" @click="update({active: true})") 开 启
</template>

<script>
import {save} from 'api/areas'

export default {
  props: ['area'],
  data() {
    return {
      active: false,
    }
  },
  methods: {
    async save(a) {
      const area = await save(a)
      this.$emit('save', area)
    },
    update(item) {
      this.save({...this.area, ...item})
    }
  }
}
</script>

<style scoped>
.title {
  border: none;
  font-size: 18px;
  outline: none;
}
.save {
  text-align: right;
}
.button {
  margin-left: 8px;
}
</style>

