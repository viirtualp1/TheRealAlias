<template>
  <div class="game-word">
    {{ word }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  word: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" src="./GameWord.scss"></style>
