<template>
  <div class="relative">
    <NuxtImg
      class="rounded-md"
      v-auto-animate
      v-if="src"
      :src="imageSrc"
      :alt="alt"
    />
    <span class="text-neutral/60 dark:text-neutral-dark/60 italic font-semibold absolute bottom-0 right-0" :class="right ? 'text-end' : 'text-start'">{{
      src
    }}</span>
  </div>
</template>

<script lang="ts" setup>
// const SCALE_CONST = 25;

// const container = ref<HTMLElement | null>(null);
// const { tilt, roll } = useParallax(container);

const props = defineProps<{
  src: string;
  alt: string;
  right?: boolean;
}>();

const colorMode = useColorMode();

const imageSrc = computed(() => {
  return colorMode.value === "dark"
    ? props.src.replace(".png", "-dark.png")
    : props.src;
});
</script>

<style scoped></style>
