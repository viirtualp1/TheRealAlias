<template>
  <div id="layout">
    <AppButtonBack />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { AppButtonBack } from "@/domains/App/AppButtonBack";
</script>
