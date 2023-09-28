<script setup lang="ts">
import type { ButtonProps } from './typing.ts'

defineProps<ButtonProps>()
defineOptions({
  name: 'ApButton'
})
</script>

<template>
  <div>
    Button
    {{ type }}
  </div>
</template>

<style scoped></style>
