<template>
  <div class="game-page">
    <div class="game-page__content container">
      <template v-if="!currentWord">
        <div class="game-page__connect-text">
          Перед началом игры убедитесь, что все игроки находятся в комнате
        </div>

        <button
          ref="copyButtonRef"
          class="game-page__link"
          :data-clipboard-text="roomLink"
        >
          <img
            src="@/assets/icons/icon-link.svg"
            class="game-page__copy"
            width="18"
            height="18"
            alt="copy"
            loading="lazy"
          />

          Ссылка на комнату
        </button>
      </template>

      <GameWord v-if="currentWord" :word="currentWord" />
      <GameControls @next="newWord" :room="roomId" />
    </div>
  </div>
</template>

<style lang="scss" src="./GamePage.scss"></style>

<script setup lang="ts">
import ClipboardJS from "clipboard";
import { GameWord } from "@/domains/Game/GameWord";
import { GameControls } from "@/domains/Game/GameControls";

const { $io: io } = useNuxtApp();
const route = useRoute();

const currentWord = ref("");
const copyButtonRef = ref<HTMLButtonElement | null>(null);

const roomId = computed(() => {
  return route.params.id;
});

const roomLink = computed(() => {
  return location.origin;
});

function newWord() {
  io.emit("next:word");
}

function listenNewWord() {
  io.on("new:word", (word: string) => (currentWord.value = word));
}

function unlistenNewWord() {
  io.disconnect();
}

function leaveTheRoom() {
  io.emit("room:leave", roomId.value);
}

function initClipboardButton() {
  if (!copyButtonRef.value) {
    return;
  }

  new ClipboardJS(copyButtonRef.value);
}

onMounted(() => {
  io.connect();
  io.emit("room:join", roomId.value);
  listenNewWord();
});

onBeforeUnmount(() => {
  unlistenNewWord();
  leaveTheRoom();
});

onBeforeRouteLeave(() => {
  unlistenNewWord();
  leaveTheRoom();
});
</script>
