<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-dark/50">
    <div class="min-w-[500px] rounded bg-white p-6 shadow-lg">
      <form @submit.prevent="add">
        <h2 class="mb-4 text-xl font-bold text-gray-300">Додати елемент</h2>
        <slot />
        <div class="flex justify-between">
          <button
            @click="emit('confirm')"
            class="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary-dark"
            type="submit">
            Додати
          </button>
          <button
            @click="emit('close-modal')"
            class="mt-4 rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800"
            type="button">
            Закрити
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    reqired: true,
  },
});

const emit = defineEmits({
  "close-modal": null,
  "confirm": null,
});
</script>

<style lang="scss"></style>
