<template>
  <div class="max-w-2xl">
    <div class="grid auto-rows-[90px] gap-y-4">
      <textarea
        v-model="item.title"
        class="input w-full resize-none"></textarea>
      <textarea
        v-model="item.text"
        class="input w-full resize-none"></textarea>
    </div>
    <AdminButton
      @click="save"
      button-type="default"
      class="mt-4 block"
      type="button"
      >Зберегти</AdminButton
    >
  </div>
</template>

<script setup>
const route = useRoute();
const params = route.params.item;
const { data: item } = await useFetch(`/api/table/${params[0]}/${params[1]}`, {
  method: "GET",
  transform: response => {
    return response.data[0];
  },
});

async function save() {
  console.log(item.value.title);
  const { error: postResuly } = await useFetch(`/api/table/${params[0]}/${params[1]}`, {
    method: "POST",
    body: [{ title: item.value.title,  text: item.value.text}],
  });
  console.log(postResuly.value);
}
</script>

<style lang="scss"></style>
