<template lang="pug">
  .login
    Form.form
      h1.title 一入非凡，注定非凡！
      Input.input
        Icon(type="ios-person-outline", slot="prepend")
      Input.input
        Icon(type="ios-locked-outline", slot="prepend")
</template>

<script>
  export default {}
</script>

<style scoped>
.login {
  background-image: url('./bg.gif');
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  min-width: 360px;
  opacity: .7;
}
.title {
  text-align: center;
  font-style: italic;
}
.input {
  margin-top: 16px;
}
</style>

