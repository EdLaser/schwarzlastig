<template>
  <div class="md:mx-auto">
    <div
      class="italic space-x-3 text-xs sm:text-sm md:text-base text-right p-3"
    >
      <button
        :class="locale === 'en' ? 'underline' : ''"
        @click="setLocale('en')"
      >
        en
      </button>
      <button
        :class="locale === 'de' ? 'underline' : ''"
        @click="setLocale('de')"
      >
        de
      </button>
    </div>
    <Hero class="mb-14" />
    <div class="flex flex-col mx-auto p-6">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-20 sm:mb-6 text-center md:text-start"
      >
        More to come...
      </h2>
    </div>
    <div class="grid md:grid-cols-2">
      <HoverCard src="/artwork/scarab" alt="Scarab" />
      <HoverCard src="/artwork/transformation" alt="Transformation" />
    </div>
    <ColorModeSwitch />
  </div>
</template>
<script lang="ts" setup>
import {} from "lucide-vue-next";

const { locale, setLocale } = useI18n();
</script>
