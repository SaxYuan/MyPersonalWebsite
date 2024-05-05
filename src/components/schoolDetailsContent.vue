<template>
  <section :class="bgColor + ' p-3 rounded'">
    <h2 class="text-3xl font-black">{{ title }}</h2>
    <template v-for="(experience, index) in experiences" :key="index">
      <h3 class="text-2xl mt-2 font-semibold">{{ experience.title }}</h3>
      <div v-for="(detail, detailIndex) in experience.details" :key="detailIndex" class="ml-6 text-xl">{{ detail }}</div>
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
