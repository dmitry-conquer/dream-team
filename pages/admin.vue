<template>
  <div class="relative grid min-h-screen grid-cols-[50px_1fr] bg-admin-gray-700">
    <aside class="border-r border-admin-gray-400 pt-10">
      <nav>
        <ul class="flex flex-col items-center gap-y-3">
          <li
            v-for="item in navagation"
            :key="item.name">
            <NuxtLink
              :to="item.link"
              class="grid h-9 w-9 place-content-center rounded-xl p-2">
              <component
                :is="item.icon"
                class="h-5 w-5 text-admin-gray-300" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="">
      <div class="mt-0 flex items-center justify-between border-b border-admin-gray-400 p-4">
        <h1 class="text-left text-xl md:text-2xl text-admin-gray-100">Панель управління</h1>
        <AdminButton
          @click="outHandle"
          button-type="danger"
          type="button"
          >Вихід</AdminButton
        >
      </div>
      <NuxtPage class="p-4" />
    </div>
  </div>
</template>

<script setup>
import IconContent from "~/components/Icon/IconContent.vue";
import IconLock from "~/components/Icon/IconLock.vue";
const authClient = useSupabaseAuthClient();
const router = useRouter();

definePageMeta({
  middleware: "auth",
});

const outHandle = async () => {
  const  {data} = await authClient.auth.signOut();
  router.push("/signin");
};

const navagation = [
  {
    name: "edit",
    link: "/admin/edit",
    icon: IconContent,
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
  @apply bg-admin-gray-400;
  svg path {
    @apply text-admin-gray-200;
  }
}
</style>
