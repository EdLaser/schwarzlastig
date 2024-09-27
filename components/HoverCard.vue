<template>
  <div
    class="flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
    @mouseenter="onMouseMove()"
    @mousemove="onMouseMove()"
  >
    <div
      class="p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative"
    >
      <div
        class="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <div class="pointer-events-none">
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100"
          >
            <p
              class="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-neutral dark:text-neutral-dark font-bold transition duration-500"
            >
              {{ randomString }}
            </p>
          </div>
        </div>
        <div class="relative z-10 flex items-center justify-center">
          <div
            class="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl"
          >
            <div
              class="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full"
            ></div>
            <NuxtImg class="z-20" :alt="props.alt" :src="imageSrc" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src: string;
  alt: string;
}>();

const colorMode = useColorMode();

const imageSrc = computed(() => {
  return colorMode.value === "dark"
    ? props.src.replace(".png", "-dark.png")
    : props.src;
});

const randomString = ref("");

const onMouseMove = () => {
  console.log("moved");
  const str = generateRandomString(1500);
  randomString.value = str;
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

generateRandomString(1500);
</script>

<style scoped></style>
