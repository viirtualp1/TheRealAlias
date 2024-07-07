<template>
  <div class="app-page">
    <div class="app-page__content container">
      <AsInput
        class="app-page__input"
        v-model="currentRoomId"
        label="ID комнаты"
      />

      <AsButton class="app-page__button" @click="joinRoom">
        Войти в комнату
      </AsButton>
      <AsButton class="app-page__button" @click="createRoom">
        Создать комнату
      </AsButton>
    </div>
  </div>
</template>

<style lang="scss" src="./AppPage.scss"></style>

<script setup lang="ts">
import { AsButton, AsInput } from "@/domains/UI"

const { $io: io } = useNuxtApp()
const router = useRouter()

const room = ref("")
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
