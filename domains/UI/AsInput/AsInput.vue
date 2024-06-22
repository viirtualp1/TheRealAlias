<template>
  <div
    class="as-input"
    :class="{ focused: hasValue, 'is-disabled': disabled }"
    @click="focus"
  >
    <div class="as-input__box">
      <div class="as-input__main">
        <div v-if="label" class="as-input__label">{{ label }}</div>

        <div class="as-input__content">
          <input
            ref="inputRef"
            v-model="currentValue"
            :type="type"
            :disabled="disabled"
            class="as-input__field"
            :aria-label="label || placeholder"
          />
        </div>
      </div>
    </div>
    <div v-if="placeholder" class="as-input__placeholder">
      {{ placeholder }}
    </div>

    <div v-if="errorMessage" class="as-input__message">{{ errorMessage }}</div>
  </div>
</template>

<style lang="scss" src="./AsInput.scss"></style>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: [Object, String, Number] as PropType<
      string | number | null | undefined
    >,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits({
  "update:modelValue": () => true,
});

const currentValue = useVModel(props, "modelValue", emit);

const inputRef = ref<HTMLInputElement>();

const hasValue = computed(() => {
  return (
    currentValue.value !== "" &&
    currentValue.value !== undefined &&
    currentValue.value !== null
  );
});

function focus() {
  inputRef.value?.focus();
}
</script>
