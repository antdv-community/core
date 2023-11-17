<docs>
---
title: 基本
---

基本使用
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { ApIconPicker } from '@antdv-plugins/core'
const pickerValue = ref()
</script>

<template>
  <div style="width: 50%">
    <ApIconPicker v-model:value="pickerValue" />
  </div>
</template>

<style scoped></style>
