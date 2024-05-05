<template>
  <div class="mt-5 grid gap-0.5 grid-cols-1 sm:grid-cols-4 text-center">
    <span class="text-xl sm:text-2xl font-semibold rounded sm:rounded-t-xl sm:rounded-b-none p-2 hover:cursor-pointer"
      :class="{ 'active': rule === item.tabOrder }" v-for="(item, index) in items" :key="index"
      @click="changeAboutPage(item.tabOrder)">{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rule: 1,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
      tabOrder: Number,
    }
  },
  methods: {
    changeAboutPage(tabOrder) {
      this.rule = tabOrder;
      this.$emit('update:rule', tabOrder);
    },
  }
}
</script>

<style scoped>

/* 頁籤點擊顯示效果 */
.active {
  background-color: white;
}
</style>
