<template>
  <div class="app-page">
    <div class="app-page__content container">
      <as-input
        v-model="currentRoomId"
        label="ID комнаты"
        class="app-page__input"
      />

      <as-button class="app-page__button" @click="joinRoom">
        Войти в комнату
      </as-button>
      <as-button class="app-page__button" @click="createRoom">
        Создать комнату
      </as-button>
    </div>
  </div>
</template>

<style lang="scss" src="./AppPage.scss"></style>

<script setup lang="ts">
import { AsButton, AsInput } from "@/domains/UI"

const { $io: io } = useNuxtApp()
const router = useRouter()

const currentRoomId = ref("")

function joinRoom() {
  router.push(`/${currentRoomId.value}`)
}

function createRoom() {
  io.emit("room:create")
}

onMounted(() => {
  io.connect()

  io.on("room:created", (roomId: string) => {
    currentRoomId.value = roomId
    joinRoom()
  })
})
</script>
