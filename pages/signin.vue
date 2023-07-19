<template>
  <section class="grid h-screen place-content-center bg-admin-gray-700 p-4 sm:p-6">
    <div class="mb-3 flex gap-2">
      <span>Статус:</span>
      <span
        v-if="user"
        class="h-3 w-3 rounded-full font-bold text-green-500"
        >online</span
      >
      <span
        v-if="!user"
        class="h-3 w-3 rounded-full font-bold text-red-800"
        >offline</span
      >
    </div>
    <div
      class="mx-auto flex max-w-3xl flex-col items-center gap-8 overflow-hidden rounded-lg bg-admin-gray-600 p-6 py-12 shadow-lg">
      <div class="rounded-md border border-admin-gray-400 p-4 md:flex md:w-1/2 md:items-center md:justify-center">
        <div class="sm:p-6 md:px-8 md:py-0">
          <h2 class="text-center text-xl font-bold text-admin-gray-100 sm:text-2xl">Доступ до адмін панелі</h2>
          <p class="mt-2 text-center text-base">
            Використайте пошту <span class="text-xl font-medium text-admin-brand-200">'admin@mail'</span> та пароль
            <span class="whitespace-nowrap text-xl font-medium text-admin-brand-200">'admin-pass'</span> для входу в
            адмін панель та редагування вмісту сайту.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center md:w-1/2 md:py-0">
        <form @submit.prevent="login">
          <div class="flex flex-col gap-y-4 overflow-hidden rounded-lg p-1.5 transition">
            <input
              v-model="inputEmail"
              class="w-full border border-transparent bg-gray-300/60 px-6 py-2 text-center text-admin-gray-100 placeholder-gray-200/80 transition focus:border-admin-gray-300 focus:outline-none"
              type="text"
              name="text"
              placeholder="Пошта"
              aria-label="Пошта'" />
            <input
              v-model="inputPassword"
              class="w-full border border-transparent bg-gray-300/60 px-6 py-2 text-center text-admin-gray-100 placeholder-gray-200/80 transition focus:border-admin-gray-300 focus:outline-none"
              type="text"
              name="text"
              placeholder="Пароль"
              aria-label="Пароль" />
            <div class="mt-5 gap-4">
              <AdminButton
                @click="out"
                type="button"
                class="w-full"
                button-type="default"
                >Вихід</AdminButton
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "admin-check",
});

const authClient = useSupabaseAuthClient();
const user = useSupabaseUser();
const inputEmail = ref("");
const inputPassword = ref("");
const router = useRouter();
const { toast, toastOptions } = useToast();

const login = async () => {
  try {
    let { data, error } = await authClient.auth.signInWithPassword({
      email: inputEmail.value,
      password: inputPassword.value,
    });
    if (data.user) {
      toast.success("Успішний вхід!", toastOptions);
      setTimeout(() => {
        router.push("/admin/edit");
      }, 1000);
      console.log(data);
    }
    if (error) throw error;
  } catch (error) {
    toast.error(`Помилка! ${error.message}`, toastOptions);
  }
};

const out = () => {
  authClient.auth.signOut();
};
</script>

<style lang="scss"></style>
