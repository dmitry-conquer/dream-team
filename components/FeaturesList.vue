<template>
  <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="f in features" :key="f.title" class="flex flex-col items-center text-center">
      <img :src="f.image" :alt="f.title" class="mb-4" />
      <h3 class="mb-2 text-xl font-semibold leading-normal text-gray-100">{{ f.title }}</h3>
      <p class="text-base leading-relaxed text-gray-200">{{ f.text }}</p>
    </div>
    <button class="" @click="login" type="button">LOGIN</button>
    <button class="" @click="out" type="button">OUT</button>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script setup>
// const client = useSupabaseClient();
const user = useSupabaseUser();
const authClient = useSupabaseAuthClient();
// const { data: features } = await useAsyncData("features", async () => {
//   const { data } = await client.from("dream_team_features").select("*");
//   return data;
// });

const login = async () => {
  let { data, error } = await authClient.auth.signInWithPassword({
    email: "dmitry.conquer@gmail.com",
    password: "coffecoffe",
  });
  if (data) {
    alert("Success");
  }
  if (error) {
    alert("Error!");
  }
};
const out = async () => {
  let { error } = await authClient.auth.signOut();
};

const { data: features } = await useFetch("/api/features", {
  transform: response => {
    return response.data;
  },
});
console.log(features.value);
</script>
