<template>
  <div class="container h-screen">
    <h1 class="text-center text-3xl font-extrabold">{{ error.statusCode }}</h1>
    <h2 class="text-center text-xl">{{ error.message }}</h2>
    <button @click="handleClearError" class="btn btn-primary px-4 py-8" type="button">На головну</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });


// if () {
//   throw createError({statusCode: 404, statusMessage: 'CANT GET COMENTS!'})
// }
</script>

<style lang="scss"></style>
