<docs>
---
title: 基本
---

基本使用
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { ApIconPicker } from '@antdv-plugins/core'
import icons from '../../data/ant-design-icons-vue'
const pickerValue = ref()
</script>

<template>
  <div style="width: 50%">
    <ApIconPicker v-model:value="pickerValue" :icons="icons.icons" />
  </div>
</template>

<style scoped></style>
