<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-dark/50">
    <div class="min-w-[330px] rounded bg-admin-gray-600 p-6 shadow-lg">
      <div>
        <slot />
        <div class="flex justify-between mt-2">
          <AdminButton
            @click="emit('confirm')"
            button-type="default"
            type="submit"
            >Підтвердити</AdminButton
          >
          <AdminButton
            @click="emit('close-modal')"
            button-type="muted"
            type="button"
            >Закрити</AdminButton
          >
        </div>
      </div>
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
