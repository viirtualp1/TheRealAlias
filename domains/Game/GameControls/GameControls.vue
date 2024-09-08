<template>
  <div class="game-controls">
    <as-button @click="nextWord">Новое слово</as-button>
  </div>
</template>

<script setup lang="ts">
import { AsButton } from "@/domains/UI"

defineProps<{
  room: string
}>()

const emit = defineEmits<{
  (e: 'next'): void
}>()

function nextWord() {
  emit("next")
}
</script>
