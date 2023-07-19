<template>
  <div class="grid grid-cols-[auto_15px] justify-start gap-4">
    <div class="relative md:h-48 md:w-48 w-32 h-32 rounded-md border border-admin-gray-400 p-2">
      <img
        :src="currentImageUrl"
        :alt="currentImageUrl"
        class="-z-1 relative block aspect-square h-full w-full object-cover" />
    </div>
    <div class="flex flex-col gap-3 pt-2">
      <IconGeer
        v-if="isLoading"
        class="h-5 w-5 animate-spin" />
      <button
        v-if="!isLoading"
        @click="open"
        class="text-sm hover:text-admin-brand-200"
        type="button">
        <IconEdit class="h-5 w-5" />
      </button>
      <a
        :href="currentImageUrl"
        target="_blank"
        class="text-sm hover:text-admin-brand-200">
        <IconLink class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useFileDialog } from "@vueuse/core";

const emit = defineEmits({
  uploaded: null,
});
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
const client = useSupabaseClient();
const { toast, toastOptions } = useToast();
const { open, onChange } = useFileDialog();
const currentImageUrl = ref(props.image);
const isLoading = ref(false);

onChange(async files => {
  isLoading.value = true;
  const timestamp = Date.now();
  open({ multiple: false });
  const { data, error } = await client.storage.from("dream_team").upload(`image${timestamp}.jpg`, files[0], {
    cacheControl: "3600",
    upsert: true,
  });

  const { data: url } = client.storage.from("dream_team").getPublicUrl(`image${timestamp}.jpg`);
  currentImageUrl.value = url.publicUrl;
  emit("uploaded", currentImageUrl.value);
  if (url) {
    setTimeout(() => {
      toast.success("Додано", toastOptions);
      isLoading.value = false;
    }, 1500);
  }
});
</script>

<style lang="scss"></style>
