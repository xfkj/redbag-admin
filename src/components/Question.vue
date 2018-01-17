<template lang="pug">
.container
  input.title(v-model="question.title" placeholder="输入标题")
  quill-editor.editor(:options="options" v-model="question.content")
  Input.input(v-model="question.answer")
    span(slot="prepend") 答案:
  Input(v-model.number="question.prize")
    span(slot="prepend") 奖励:
    span(slot="append") 分
  .footer
    Button(size="large" type="primary" @click="save" shape="circle" icon="checkmark-round")
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {save} from '../api/questions'
import {quillEditor} from 'vue-quill-editor'

export default {
  props: ['question'],
  data() {
    return {
      options: {
        theme: 'bubble',
        placeholder: "这里输入试题内容，选中文字可呼出工具条...",
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large'] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline'],
            ['image', 'link'],
            [{ 'color': [] }, { 'background': [] }],
            ['clean'],
          ]
        }
      }
    }
  },
  methods: {
    async save() {
      const question = await save(this.question)
      this.$emit('save', question)
    }
  },
  components: {quillEditor}
}
</script>

<style scoped>
.container {
  width: 320px;
  border: 1px solid #096dd9;
  border-radius: 16px;
}
.container>* {
  margin-top: 8px;
  padding: 0 4px;
}
.title {
  display: block;
  width: 100%;
  text-align: center;
  border: none;
  font-size: 18px;
  outline: none;
  background: transparent;
}
.editor {
  background: #495060;
  height: 424px;
  font-size: 16px;
  padding: 0;
  color: #fff;
}
.footer {
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
}
</style>

<style>
.ql-tooltip {
  z-index: 10;
}
</style>



