<template>
  <section class="container  mb-24 lg:mb-32" id="hero">
    <h1 class="mb-4 ">Приєднуйся до команди мрії!</h1>
    <p class="mb-8 text-center lg:text-xl leading-normal">
      "Команда твоєї мрії" - це енергійний та творчий колектив професіоналів, присвячений створенню захоплюючих та
      ефективних інтернет-сторінок. Ми володіємо незрівнянним досвідом у розробці та дизайні веб-проектів різних
      масштабів і спеціалізуємося на створенні унікальних інтерактивних рішень.
    </p>
    <div class="mb-8 md:mb-16 lg:mb-24 flex flex-wrap justify-center gap-3">
      <NuxtLink to="/signup" class="btn btn-primary px-[2rem] py-[0.75rem]">Приєднатися</NuxtLink>
      <a href="#features" class="btn btn-muted px-[2rem] py-[0.75rem]">Ознайомитися</a>
    </div>
    <a href="https://github.com/dmitry-conquer" target="_blank" class="relative block md:px-4 lg:12 xl:32">
      <img src="~/assets/images/hero-img.jpg" alt="" class="aspect-video w-full" />
      <div
        class="top-1/2 left-1/2 absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white">
        <IconPlay class="h-5 w-5 fill-primary stroke-none" />
      </div>
    </a>
  </section>
</template>

<script setup></script>

<style lang="scss"></style>
