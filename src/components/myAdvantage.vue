<template>
  <div :class="bgColor + ' rounded-2xl text-xl text-center p-5'">
    <div>
      <span class="text-2xl sm:text-3xl font-medium sm:font-bold">{{ title }}</span>
      <ul class="mt-1 text-start" v-for="(item, index) in items" :key="'item-' + index">
        <li class="text-xl sm:text-2xl font-semibold">{{ index + 1 }}. {{ item.itemTitle }}</li>
        <li class="text-lg sm:text-xl ml-3 sm:ml-6">{{ item.itemContent }}</li>
      </ul>
    </div>
    <div class="mt-3 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-3 justify-items-center px-3 gap-3" v-if="required">
      <div v-for="(pic, index) in pictures" :key="index" class="w-10 h-10 lg:w-16 lg:h-16">
        <img :src="pic" :alt="pic" class="w-full h-full object-scale-down">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    bgColor: String,
    pic: Array,
    items: Object,
    pictures: Array,
    required: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
