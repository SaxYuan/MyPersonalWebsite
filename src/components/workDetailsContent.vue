<template>
  <div class="grid gap-y-3 mt-4">
    <section :class="bgColor + ' p-3 sm:flex rounded'">
      <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
        <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">{{ title }}</h2>
      </div>
      <div class="flex-auto ml-3">
        <template v-for="(item, index) in items" :key="index">
          <h3 class="text-xl sm:text-2xl mt-2 font-semibold">{{ item.title }}</h3>
          <template v-if="item.details">
            <div v-for="(detail, detailIndex) in item.details" :key="detailIndex" class="px-4">
              <span class="text-xl">{{ detail }}</span>
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
