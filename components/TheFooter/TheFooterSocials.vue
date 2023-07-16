<template>
  <ul class="flex gap-3">
    <li
      v-for="(soc, i) in socials"
      class="group grid h-10 w-10 place-content-center rounded-full bg-gray-300 transition-all hover:bg-primary">
      <a :href="soc.link">
        <component :is="soc.icon" class="h-6 w-6 fill-primary transition-all group-hover:fill-white" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import IconInsta from "~/components/Icon/IconInsta.vue";
import IconGithub from "~/components/Icon/IconGithub.vue";
import IconLn from "~/components/Icon/IconLn.vue";
import IconFacebook from "~/components/Icon/IconFacebook.vue";
import IconTwitter from "~/components/Icon/IconTwitter.vue";

const socials = [
  {
    icon: IconInsta,
    link: "",
  },
  {
    icon: IconGithub,
    link: "",
  },
  {
    icon: IconLn,
    link: "",
  },
  {
    icon: IconFacebook,
    link: "",
  },
  {
    icon: IconTwitter,
    link: "",
  },
];
</script>

<style lang="scss"></style>
