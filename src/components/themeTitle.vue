<template>
  <h1 class="text-4xl text-center sm:text-start mt-3 sm:text-5xl scroll-mt-32 md:scroll-mt-24 font-bold" :id="itemId">{{ title }}
  </h1>
  <div class="xl:hidden text-center mt-2 font-medium text-slate-800" v-if="required">
    <span class="text-lg">點擊卡片看更多</span>
  </div>
  <hr class="border-2 border-white mt-1 ">
</template>

<script>
export default {
  props: {
    title: String,
    itemId: String,
    required:{
      type: Boolean,
      default: false,
    }
  },

};
</script>