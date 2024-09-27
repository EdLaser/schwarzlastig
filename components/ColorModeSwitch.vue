<template>
  <button>
    
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>