<template>
  <div id="layout">
    <app-button-back />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { AppButtonBack } from "@/domains/App/AppButtonBack"
</script>
