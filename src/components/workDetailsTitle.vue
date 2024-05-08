<template>
  <div>
    <h4 class="text-lg xs:text-2xl sm:text-3xl text-center font-semibold sm:font-extrabold">
      {{ title }} <br>
      {{ content }} <br class="md:hidden" v-if="required">
      {{ years }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    years: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped></style>
