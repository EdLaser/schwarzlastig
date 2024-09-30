<template>
  <div
    class="min-h-screen w-full p-4 pb-20 flex flex-col md:flex-row items-center justify-between"
  >
    <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mt-10">
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-20 sm:mb-6 text-center md:text-start"
      >
        𝖘𝖈𝖍𝖜𝖆𝖗𝖟𝖑𝖆𝖘𝖙𝖎𝖌
      </h1>
      <p
        class="text-xl text-center md:text-start sm:text-2xl md:mb-8 text-neutral/90 dark:text-neutral-dark/90"
      >
        {{ $t("primeHeader") }}
      </p>
      <ul
        class="text-sm sm:text-xl mb-8 sm:mb-10 text-center md:text-start flex justify-between gap-3 text-neutral/80 dark:text-neutral-dark/80"
      >
        <li
          v-for="word in keywords"
          class="underline underline-offset-2 hover:blur-sm duration-1000"
        >
          {{ word }}
        </li>
      </ul>
    </div>
    <ImageCard src="/artwork/cicada" alt="Cicada" right class="mb-10" />
  </div>
</template>
<script setup>
const keywords = ["Dedicated", "Dark", "Dystopic"];
</script>
