<template>
  <div class="grid gap-y-3 mt-4">
    <section :class="bgColor + ' p-3 sm:flex rounded'">
      <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
        <span class="text-xl sm:text-xl md:text-3xl font-bold sm:w-[80px] text-center">{{ title }}</span>
      </div>
      <div class="flex-auto ml-3">
        <template v-for="(item, index) in items" :key="index">
          <h3 class="text-lg sm:text-2xl mt-1 sm:mt-2 font-medium">{{ item.title }}</h3>
          <template v-if="item.details">
            <div v-for="(detail, detailIndex) in item.details" :key="detailIndex" class="px-4">
              <span class="text-md sm:text-xl">{{ detail }}</span>
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    bgColor: String,
    items: Object,
  }
}
</script>
