<template>
  <div class="grid grid-cols-[1fr_27px] gap-2 rounded-md border border-admin-gray-400 p-2 text-center ">
    <div class="line-clamp-3">
      <h3 class="mb-2 truncate px-5 text-base font-semibold leading-tight text-admin-gray-100">{{ item.title }}</h3>
      <p class="leading-2  text-sm text-gray-200">{{ item.text }}</p>
    </div>
    <div class="border-l border-admin-gray-400 px-2 flex flex-col justify-center gap-4">
      <button
        @click="isOpen = true"
        class=""
        type="button"
        aria-label="Видалити">
        <IconTrash class="h-5 w-5 text-admin-gray-300 transition hover:text-red-700/70" />
      </button>
      <NuxtLink
        :to="`/admin/edit/${table}/${item.id}`"
        class=""
        type="button"
        aria-label="Видалити">
        <IconEdit class="h-5 w-5 text-admin-gray-300 transition hover:text-admin-brand-200" />
      </NuxtLink>
    </div>
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
