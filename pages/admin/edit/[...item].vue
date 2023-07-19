<template>
  <div class="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-6 md:gap-0">
    <div class="pr-4">
      <div class="grid max-w-2xl auto-rows-fr gap-y-4">
        <textarea
          v-model="item.title"
          class="input w-full resize-none"></textarea>
        <textarea
          v-model="item.text"
          class="input w-full resize-none"></textarea>
      </div>
      <AdminButton
        @click="save"
        button-type="success"
        class="mt-4 block"
        type="button"
        >Зберегти</AdminButton
      >
    </div>
    <aside class="md:-mt-4 md:min-h-screen border-l border-admin-gray-400 md:p-4 max-md:row-start-1">
      <AdminImageUpload
        @uploaded="item.image = $event"
        :image="item.image" />
    </aside>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const route = useRoute();
const { toast, toastOptions } = useToast();
const params = route.params.item;
const { data: item } = await useFetch(`/api/table/${params[0]}/${params[1]}`, {
  method: "GET",
  transform: response => {
    return response.data[0];
  },
});
console.log(item.value);


async function save() {
  const body = {
    title: item.value.title,
    text: item.value.text,
    image: item.value.image,
  };
  console.log(body);
  try {
    const { data, error } = await client.from(params[0]).update(body).eq("id", params[1]).select();
    if (data) {
      toast.success("Збережено", toastOptions);
      console.log(data);
    }
    if (error) throw error;
  } catch (error) {
    console.log(error);
    toast.error(`Помилка: ${error.message}`, toastOptions);
  }
}
</script>

<style lang="scss"></style>
