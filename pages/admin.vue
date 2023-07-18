<template>
  <div class="relative grid min-h-screen grid-cols-[60px_1fr]">
    <aside class="pt-10">
      <nav>
        <ul class="flex flex-col items-center gap-y-5">
          <li v-for="item in navagation" :key="item.name">
            <NuxtLink :to="item.link" class="grid h-10 w-10 place-content-center rounded-xl p-2">
              <component :is="item.icon" class="h-5 w-5" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="bg-gray-150 p-4">
      <h1 class="text-left text-2xl text-gray-300 pb-4">Редагування контенту</h1>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import IconEdit from "~/components/Icon/IconEdit.vue";
import IconLock from "~/components/Icon/IconLock.vue";

definePageMeta({
  middleware: "auth",
});

const navagation = [
  {
    name: "edit",
    link: "/admin/edit",
    icon: IconEdit,
  },
  {
    name: "auth",
    link: "/admin/auth",
    icon: IconLock,
  },
];
</script>

<style lang="scss">
.router-link-active {
  @apply bg-gray-300;
  svg path {
    @apply stroke-primary;
  }
}
</style>
