<template>
  <div>
    <h2 class="pb-4 text-left text-xl font-medium text-admin-gray-200">Переваги</h2>
    <div class="grid max-w-3xl auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
      <AdminItem
        v-for="f in features"
        :key="f.id"
        :item="f"
        table="dream_team_features"
        @confirm="insert"
        @remove="remove" />
      <AdminButton
        button-type="add-item"
        @click="isOpen = true">
        +
      </AdminButton>
    </div>
    <AdminModalForm
      v-if="isOpen"
      @close-modal="isOpen = false"
      @confirm="insert">
      <div class="grid gap-y-3">
        <h2 class="modal-title">Додати елемент</h2>
        <input
          v-model="title"
          type="text"
          placeholder="Заголовок"
          class="input" />
        <textarea
          v-model="desctiprion"
          placeholder="Опис"
          class="input min-h-[150px] resize-none"></textarea>
      </div>
    </AdminModalForm>
  </div>
</template>

<script setup>
import { RealtimeChannel } from "@supabase/supabase-js";
let realtimeChannel = RealtimeChannel;
const { toast, toastOptions } = useToast();
const client = useSupabaseClient();
const title = ref("");
const desctiprion = ref("");
const isOpen = ref(false);

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
  isOpen.value = false;
  title.value = "";
  desctiprion.value = "";
  toast.success("Об'єкт створено", toastOptions);
};

/*
  remove data
*/

async function remove(id) {
  const { data, error } = await useFetch(`/api/table/dream_team_features`, {
    method: "DELETE",
    params: { id },
  });
  toast.success("Об'єкт видалено", toastOptions);
}

/*
  get data
*/

const { data: features, refresh } = await useFetch(`/api/table/dream_team_features/`, {
  method: 'GET',
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
