<template>
  <div class="game-controls">
    <AsButton @click="nextWord">Новое слово</AsButton>
  </div>
</template>

<script setup lang="ts">
import { AsButton } from "@/domains/UI";

defineProps({
  room: {
    type: String,
    default: "",
  },
});

const emit = defineEmits({
  next: () => true,
});

function nextWord() {
  emit("next");
}
</script>
