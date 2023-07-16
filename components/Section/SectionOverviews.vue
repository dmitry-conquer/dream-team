<template>
  <section class="container py-20" id="overviews">
    <div class="mx-auto mb-16 max-w-[48rem]">
      <div class="section-label"><span>Клієнт - перш за все</span></div>
      <h2 class="mb-4 lg:mb-11 text-center">Що про нас говорять?</h2>
      <p class="text-center leading-normal lg:text-xl">
        Ми пишаємося своїми позитивними відгуками та впевнені, що вони будуть джерелом натхнення для вас. Ми постійно
        прагнемо до найвищої якості та задоволення клієнтів, і відгуки від наших задоволених клієнтів свідчать про це.
      </p>
    </div>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :looped-slides="2"
      :breakpoints="breakpointsOptions"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }">
      <SwiperSlide v-for="(o, i) in overviews" :key="i" class="h-full">
        <article class="flex h-full flex-col items-start bg-gray-300 px-6 pt-6">
          <div class="relative mb-4">
            <IconQuote class="absolute -right-3 -top-1 h-6 w-6" />
            <img :src="o.avatar" :alt="o.name" class="h-12 w-12 rounded-full" />
          </div>
          <p class="grow-1 mb-6 leading-normal">
            {{ o.text }}
          </p>
          <div class="border-t border-gray-100/30 py-3 leading-normal">
            {{ o.name }} <span class="text-gray-200/40">/</span> <span class="text-primary">{{ o.role }}</span>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
const breakpointsOptions = {
  320: {
    slidesPerView: 1.2,
    spaceBetween: 15,
  },
  576: {
    slidesPerView: 1.6,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.3,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const overviews = [
  {
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
    name: "Іван Ковальчук",
    text: "Команда твоєї мрії - це найкращі фахівці у сфері веб-розробки! Їхній творчий підхід та уважний підхід до деталей зробили мій сайт по-справжньому унікальним.",
    role: "Підприємець",
  },
  {
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/9.jpg",
    name: "Олена Шевченко",
    text: "Дякую 'Команді твоєї мрії' за швидку та професійну розробку мого мобільного додатку. Їхня експертиза та підтримка від початку до кінця були вражаючими.",
    role: "UX Board",
  },
  {
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
    name: "Петро Волошин",
    text: "Веб-дизайн, розробка, оптимізація - 'Команда твоєї мрії' вміє все! Мій сайт став втіленням моїх найсміливіших ідей та виглядає фантастично!",
    role: "Адвокат",
  },
  {
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    name: "Марія Сидоренко",
    text: "Неймовірна команда професіоналів! Їхній бекенд розробка вирішила всі мої технічні завдання і забезпечила плавну та безперебійну роботу мого веб-сайту.",
    role: "Директор",
  },
  {
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
    name: "Андрій Петренко",
    text: "Я дуже задоволений веб-оптимізацією, яку зробила 'Команда твоєї мрії'. Мій сайт значно покращився у рейтингах пошукових систем, що позитивно впливає на бізнес.",
    role: "Дизайнер",
  },
];
</script>

<style lang="scss"></style>
