<template>
  <div class="app-page">
    <div class="app-page__content">
      <GameWord :word="currentWord" />

      <button class="app-page__start" @click="startGame">Start game</button>
    </div>
  </div>
</template>

<style lang="scss" src="./AppPage.scss"></style>

<script setup lang="ts">
import { GameWord } from "@/domains/Game/GameWord";

const { $io: io } = useNuxtApp();

const currentWord = ref("");

function startGame() {
  io.emit("start:game");
}

onMounted(() => {
  io.connect();

  io.on("new:word", (word: string) => {
    console.log(word);
    currentWord.value = word;
  });
});
</script>
