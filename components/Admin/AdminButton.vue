<template>
  <button
    :class="types[buttonType]"
    class="grid place-content-center rounded-md border p-4 text-center transition-colors"
    type="button"
    aria-label="Редагувати">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  buttonType: {
    type: String,
    required: true,
  },
});

const types = {
  default: "mt-4 rounded bg-admin-brand-200/70 border-admin-brand-100 px-4 py-2 text-admin-gray-100 hover:bg-admin-brand-200",
  muted: "mt-4 rounded  px-4 py-2 text-admin-gray-100 border bg-admin-gray-400 border-admin-gray-300 p-2 text-center hover:bg-admin-gray-300/50",
  "add-item": "border-admin-brand-200 text-3xl text-admin-brand-200 hover:bg-admin-gray-600",
};
</script>

<style lang="scss"></style>
