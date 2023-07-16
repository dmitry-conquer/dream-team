<template>
  <section class="bg-primary">
    <div class="container grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-2">
      <div class="">
        <h2 class="mb-2 block  text-2xl sm:text-3xl font-extrabold leading-10 text-white ">
          Залишайся з нами
        </h2>
        <p class="text-white text-center sm:text-left">Підписуйся на оновлення, та будь в курсі усіх подій!</p>
      </div>
      <form @submit.prevent="" action="#" class="grid gap-2 sm:flex">
        <input
          type="text"
          class="w-full border border-gray-100/50 bg-primary-dark px-4 py-3 transition focus:border-gray-100 focus:outline-none focus:ring-0"
          placeholder="Пошта" />
        <button type="button" class="btn btn-white px-8 py-3 text-xl">Підписатися</button>
      </form>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss"></style>
