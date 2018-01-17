<template lang="pug">
  Menu(width="auto" theme="dark" @on-select="name => $router.push(name)")
    MenuItem(name="/areas") 地区列表
    MenuItem(name="/questions") 试题列表
    MenuItem(name="/students") 学生列表
</template>

