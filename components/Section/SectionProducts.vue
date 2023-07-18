<template>
  <section class="container border-b border-gray-100/30 py-20" id="services">
    <div class="mx-auto mb-20 max-w-[48rem]">
      <div class="section-label"><span>Головне - досягнення цілі</span></div>
      <h2 class="mb-8 text-center lg:mb-11">Які послуги ми надаємо?</h2>
      <p class="text-center leading-normal lg:text-xl">
        Ми бачимо своїх клієнтів як партнерів, з якими ми прагнемо співпрацювати на тривалий термін. Ми готові виходити
        за межі звичайних вимог, щоб забезпечити ваш успіх та досягти спільних цілей.
      </p>
    </div>
    <div class="space-y-20">
      <div
        v-for="(s, i) in services"
        :key="i"
        class="grid items-center gap-8 sm:gap-16 md:flex md:grid-cols-2 md:even:flex-row-reverse">
        <div class="md:w-1/2">
          <span class="mb-4 block font-arch text-xl text-primary md:mb-8">{{ s.slogan }}</span>
          <h3 class="mb-2 text-2xl font-semibold leading-normal text-gray-100">{{ s.title }}</h3>
          <p class="mb-4">{{ s.text }}</p>
          <ul class="space-y-2">
            <li v-for="item in s.list" :key="item" class="flex items-center gap-1.5">
              <IconCheck />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <img :src="s.image" :alt="s.title" class="md:w-1/2" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: services } = await useFetch("/api/services", {
  transform: response => {
    return response.data;
  },
});
console.log(services.value);
</script>

<style lang="scss"></style>
