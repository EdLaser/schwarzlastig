<template>
  <div class="flex justify-between fixed bottom-10 w-full px-8">
    <NuxtLink to="https://www.instagram.com/schwarzlastig/" external target="_blank">
      <Instagram />
    </NuxtLink>

    <button class="" @click="toggleColorMode()" v-auto-animate>
      <component :is="colorMode.value === 'dark' ? SunMedium : Moon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { SunMedium, Moon, Instagram } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
