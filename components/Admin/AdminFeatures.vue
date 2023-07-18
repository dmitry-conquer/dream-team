<template>
  <div>
    <h2 class="pb-4 text-left text-xl text-gray-300">Переваги</h2>
    <div class="grid max-w-3xl gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="f in features"
        :key="f.title"
        class="group relative flex flex-col items-center rounded-md border p-4 text-center">
        <button @click="remove(f.id)" class="absolute right-1 top-1" type="button" aria-label="Редагувати">
          <IconTrash class="hidden h-5 w-5 text-red-700 group-hover:block" />
        </button>
        <h3 class="mb-2 text-base font-semibold leading-tight text-gray-300">{{ f.title }}</h3>
        {{ f.id }}
        <p class="text-sm leading-relaxed text-gray-200">{{ f.text }}</p>
      </div>
      <button
        @click="isOpen = true"
        class="flex justify-center rounded-md border p-4 text-center text-3xl text-gray-300"
        type="button"
        aria-label="Редагувати">
        +
      </button>
      <BaseModal :isOpen="isOpen" @confirm="insert" @close-modal="isOpen = false">
        <div class="grid gap-y-3">
          <input
            v-model="title"
            type="text"
            placeholder="Заголовок"
            class="rounded-sm border px-3 py-4 text-gray-300" />
          <textarea
            v-model="desctiprion"
            placeholder="Опис"
            class="min-h-[150px] resize-none rounded-sm border px-3 py-4 text-gray-300"></textarea>
        </div>
      </BaseModal>
    </div>
  </div>
</template>

<script setup>
import { RealtimeChannel } from "@supabase/supabase-js";
let realtimeChannel = RealtimeChannel;
const client = useSupabaseClient();
const isOpen = ref(false);
const title = ref("");
const desctiprion = ref("");

/*
    insert data
  */
const insert = async () => {
  const { data, error } = await useFetch(`/api/table/dream_team_features`, {
    method: "POST",
    body: {
      title: title.value,
      text: desctiprion.value,
      image: "image here",
    },
  });
};

/*
  remove data
*/

async function remove(id) {
  const { data, error } = await useFetch(`/api/table/dream_team_features`, {
    method: "DELETE",
    params: { id },
  });
}

/*
  get data
*/

const { data: features, refresh } = await useFetch("/api/features", {
  transform: response => {
    return response.data;
  },
});

/*
  subscribe to change
*/

onMounted(() => {
  realtimeChannel = client
    .channel("public:dream_team_features")
    .on("postgres_changes", { event: "*", schema: "public", table: "dream_team_features" }, () => refresh());
  realtimeChannel.subscribe();
});
onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
</script>

<style lang="scss"></style>
