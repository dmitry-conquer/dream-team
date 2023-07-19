<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-dark/50">
    <div class="min-w-[500px] rounded bg-admin-gray-600 p-6 shadow-lg">
      <form @submit.prevent="emit('confirm')">
        <slot />
        <div class="flex justify-between mt-4">
          <AdminButton
            button-type="success"
            type="submit"
            >Додати</AdminButton
          >
          <AdminButton
            @click="emit('close-modal')"
            button-type="default"
            type="button"
            >Закрити</AdminButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits({
  "close-modal": null,
  confirm: null,
});
</script>

<style lang="scss"></style>
