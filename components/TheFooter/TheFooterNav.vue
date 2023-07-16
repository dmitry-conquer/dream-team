<template>
  <nav class="justify-self-end">
    <ul class="flex flex-wrap gap-4">
      <li v-for="(l, i) in navigation" :key="i">
        <a :href="`#${l.link}`" class="hover:text-primary hover:transition">{{ l.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navigation = [
  {
    name: "Головна",
    link: "",
  },
  {
    name: "Переваги",
    link: "features",
  },

  {
    name: "Послуги",
    link: "services",
  },

  {
    name: "Відгуки",
    link: "overviews",
  },
];
</script>

<style lang="scss"></style>
