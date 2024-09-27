<template>
  <button class="fixed bottom-10 right-4" @click="toggleColorMode()" v-auto-animate>
    <component :is="colorMode.value === 'dark' ? SunMedium : Moon" />
  </button>
</template>

<script lang="ts" setup>
import { SunMedium, Moon } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
