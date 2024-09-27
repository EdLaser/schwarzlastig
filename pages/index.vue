<template>
  <div class="md:mx-auto">
    <Hero class="mb-14" />
    <div class="grid md:grid-cols-2">
      <HoverCard src="/artwork/scarab.png" alt="Scarab" />
      <HoverCard src="/artwork/transformation.png" alt="Transformation" />
    </div>
    <ColorModeSwitch />
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
    { rel: "manifest", href: "/site.webmanifest" }
  ],
});
</script>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">