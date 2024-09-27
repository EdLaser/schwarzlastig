<template>
  <div
    class="text-neutral dark:text-neutral-dark bg-primary dark:bg-pimary-dark transition-colors duration-300"
    style="font-family: 'Cardo: serif'"
  >
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "Schwarzlastig",
  meta: [
    {
      name: "description",
      content: "Unvail into darkness",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
});
</script>
