<template>
  <nav class="
  py-1 text-center grid grid-cols-3 gap-x-2 text-lg
  sm:teat-start sm:flex sm:text-center
  md:p-1 md:mt-1
  lg:text-xl lg:gap-4 ">
    <div v-for="(item, index) in items" :key="index" @click="goToAnchor(item.anchor)" class="cursor-pointer hover:border-b-2 hover:border-black font-bold">{{ item.name }}</div>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToAnchor(area) {
      const element = document.querySelector(area);
      if (area === '#homePage') {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.arrowShow = false;
        this.typeWriter();
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  }
}
</script>

<style scoped></style>
