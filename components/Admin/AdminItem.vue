<template>
  <div
    class="group relative grid place-content-center rounded-md border border-admin-gray-400 px-2 pb-2 pt-4 text-center hover:bg-admin-gray-600">
    <button
      @click="isOpen = true"
      class="absolute right-1 top-1"
      type="button"
      aria-label="Видалити">
      <IconTrash class="hidden h-5 w-5 text-red-700 group-hover:block" />
    </button>
    <NuxtLink
      :to="`/admin/edit/${table}/${item.id}`"
      class="absolute left-1 top-1"
      type="button"
      aria-label="Видалити">
      <IconEdit class="hidden h-5 w-5 text-admin-brand-200 group-hover:block" />
    </NuxtLink>
    {{ table }}
    <h3 class="mb-2 truncate px-5 text-base font-semibold leading-tight text-admin-gray-100">{{ item.title }}</h3>
    <p class="leading-2 line-clamp-3 text-sm text-gray-200">{{ item.text }}</p>
  </div>
  <AdminModalConfirm
    v-if="isOpen"
    @confirm="emit('remove', item.id)"
    @close-modal="isOpen = false">
    <h2 class="modal-title">Видалити об'єкт?</h2>
  </AdminModalConfirm>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  table: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  remove: null,
  "close-modal": null,
  confirm: null,
});

const isOpen = ref(false);
</script>
<style lang="scss"></style>
