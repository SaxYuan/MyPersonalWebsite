<template>
  <h1 class="text-4xl text-center sm:text-start mt-3 sm:text-5xl scroll-mt-32 md:scroll-mt-24" :id="itemId">{{ title }}
  </h1>
  <hr class="border-2 border-white mt-1 ">
</template>

<script>
export default {
  props: {
    title: String,
    itemId: String,
  },

};
</script>