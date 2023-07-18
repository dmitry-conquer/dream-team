<template>
  <section class="grid h-screen place-content-center">
    <div
      class="mx-auto flex max-w-3xl flex-col items-center gap-8 overflow-hidden rounded-lg bg-gray-300 py-12 shadow-lg">
      <div class="md:bg-gray-700 md:dark:bg-gray-800 md:flex md:w-1/2 md:items-center md:justify-center">
        <div class="px-6 py-6 md:px-8 md:py-0">
          <h2 class="whitespace-nowrap text-2xl font-bold text-white">
            Доступ до <span class="text-primary">адмін панелі</span>
          </h2>
          <p class="mt-2 text-center text-base">
            Використайте пошту <span class="font-arch text-xl text-primary">'admin@mail.com'</span> та пароль
            <span class="whitespace-nowrap font-arch text-xl text-primary">'admin-pass'</span> для входу в адмін панель
            та редагування вмісту сайту.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center pb-6 md:w-1/2 md:py-0">
        <form @submit.prevent="login">
          <div class="flex flex-col gap-y-4 overflow-hidden rounded-lg p-1.5 transition">
            <input
              v-model="inputEmail"
              class="border-b border-gray-200/60 bg-gray-300/60 px-6 py-2 text-center placeholder-gray-200 transition focus:border-primary/80 focus:outline-none"
              type="text"
              name="text"
              placeholder="admin@mail.com"
              aria-label="Логін: 'admin'" />
            <input
              v-model="inputPassword"
              class="border-b border-gray-200/60 bg-gray-300/60 px-6 py-2 text-center placeholder-gray-200 transition focus:border-primary/80 focus:outline-none"
              type="text"
              name="text"
              placeholder="Пароль: 'admin-pass'"
              aria-label="Пароль: 'admin-pass'" />
            <button class="btn btn-primary mt-4 rounded-md px-4 py-2">Вхід</button>
          </div>
        </form>
        <button @click="out" class="" type="button">out</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const authClient = useSupabaseAuthClient();
const inputEmail = ref("");
const inputPassword = ref("");
const router = useRouter()

const login = async () => {
  let { data, error } = await authClient.auth.signInWithPassword({
    email: inputEmail.value,
    password: inputPassword.value,
  });
  if (data) {
    alert("Success");
    router.push('/admin')
  }
  if (error) {
    alert("Error!");
  }
};

const out = async () => {
  let { error } = await authClient.auth.signOut();
  console.log(error);
};
</script>

<style lang="scss"></style>
