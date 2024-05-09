<template>
  <section :class="bgColor + ' p-3 rounded'">
    <h2 class="text-2xl font-semibold sm:text-3xl">{{ title }}</h2>
    <template v-for="(experience, index) in experiences" :key="index">
      <h3 class="text-xl mt-2 font-medium sm:text-2xl">{{ experience.title }}</h3>
      <div v-for="(detail, detailIndex) in experience.details" :key="detailIndex" class="ml-3 text-md sm:ml-6 sm:text-xl">{{ detail }}</div>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    bgColor: String,
    experiences: Array
  }
}
</script>
