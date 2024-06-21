import type { io } from "@/plugins/socket";

interface PluginsInjections {
  $io: ReturnType<typeof io>;
}

declare module "#app" {
  interface NuxtApp extends PluginsInjections {}
}

declare module "nuxt/dist/app/nuxt" {
  interface NuxtApp extends PluginsInjections {}
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties extends PluginsInjections {}
}
