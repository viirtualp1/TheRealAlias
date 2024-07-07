<template>
  <button v-if="!isHomeRoute" class="app-button-back" @click="goHome">
    <img
      src="@/assets/icons/icon-home.svg"
      width="30"
      height="24"
      alt="home"
      loading="lazy"
    />
  </button>
</template>

<style lang="scss" src="./AppButtonBack.scss"></style>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const isHomeRoute = computed(() => {
  return route.name === "index"
})

function goHome() {
  router.push("/")
}
</script>
