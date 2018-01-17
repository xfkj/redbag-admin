<template lang="pug">
.main
  Row.row
    Col.col(span="6" v-for="q in questions" :key="q.objectId")
      Question(:question="q" @save="save")
  Button.add(type="primary", shape="circle", icon="plus", @click="add")
</template>

<script>
import {find} from '../api/questions'
import Question from './Question'

export default {
  data() {
    return {
      questions: [],
    }
  },
  async created() {
    this.questions = await find()
  },
  methods: {
    add() {
      if (this.questions.some(_ => !_.objectId)) return false
      this.questions.push({})
    },
    save(q) {
      const index = q.objectId ? this.questions.findIndex(_ => _.objectId === q.objectId) : this.questions.findIndex(_ => !_.objectId)
      this.questions.splice(index, 1, q)
      this.$Message.success('保存成功')
    }
  },
  components: {Question}
}
</script>

<style scoped>
.row {
  width: 1440px;
}
.col {
  margin-bottom: 24px;
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

