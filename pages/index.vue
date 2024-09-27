<template>
  <div class="md:mx-auto">
    <Hero class="mb-14" />
    <div class="flex flex-col mx-auto p-6">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-20 sm:mb-6 text-center md:text-start">More to come...</h2>
      <small>Watch out for more</small>
    </div>
    <div class="grid md:grid-cols-2">
      <HoverCard
        src="/artwork/scarab.png"
        alt="Scarab"
      />
      <HoverCard
        src="/artwork/transformation.png"
        alt="Transformation"
      />
    </div>
    <ColorModeSwitch />
  </div>
</template>
<script lang="ts" setup>
</script>
