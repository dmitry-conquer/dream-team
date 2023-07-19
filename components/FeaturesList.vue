<template>
  <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="f in features"
      :key="f.title"
      class="flex flex-col items-center text-center">
      <img
        :src="f.image"
        :alt="f.title"
        class="mb-4" />
      <h3 class="mb-2 text-xl font-semibold leading-normal text-gray-100">{{ f.title }}</h3>
      <p class="text-base leading-relaxed text-gray-200">{{ f.text }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: features } = await useFetch(`/api/table/dream_team_features`, {
  method: "GET",
  transform: response => {
    return response.data;
  },
});
console.log(features.value);
</script>
