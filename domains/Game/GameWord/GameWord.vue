<template>
  <div class="game-word">
    {{ word }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  word: string
}>()
</script>

<style lang="scss" src="./GameWord.scss"></style>
