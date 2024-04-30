<script>
import { RouterLink, RouterView } from 'vue-router';
import github from '@/assets/img/icon-github.png';

export default {
  data() {
    return {
      yScrollValue: '',
      RouterLink,
      RouterView,
      github,
    };
  },
  methods: {
    goToAnchor(area) {
      const element = document.querySelector(area);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollWatch() {
      this.yScrollValue = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWatch)
  }
}

</script>

<template>
  <!-- ! 頁首 -->
  <header class="bg-white/30 pl-[5%] sticky top-0 z-50 p-3 md:h-[60px]">
    <div class="absolute inset-0 backdrop-blur-md"></div>

    <div class="relative z-10 md:flex md:justify-between">
      <span class="font-bold text-2xl md:mt-1 md:text-3xl xl:text-4xl xl:mt-0">Bo-Yuan's Website</span>
      <nav class="py-1 text-center sm:teat-start grid grid-cols-3 gap-x-2 text-lg md:p-1 sm:flex sm:text-center lg:text-xl lg:gap-4 md:mt-1">
        <div class="cursor-pointer hover:border-b-2 hover:border-black font-bold" @click="goToAnchor('#work')">成長軌跡</div>
        <div class="cursor-pointer hover:border-b-2 hover:border-black font-bold" @click="goToAnchor('#reason')">轉職初衷</div>
        <div class="cursor-pointer hover:border-b-2 hover:border-black font-bold" @click="goToAnchor('#skill')">我的優勢</div>
        <div class="cursor-pointer hover:border-b-2 hover:border-black font-bold" @click="goToAnchor('#myProject')">個人專案</div>
        <div class="cursor-pointer hover:border-b-2 hover:border-black font-bold" @click="goToAnchor('#groupProject')">團體專案</div>
      </nav>
    </div>
  </header>
  <RouterView />

  <!-- Gotop -->
  <div class="fixed right-2 bottom-28 z-10 cursor-pointer sm:right-5 lg:right-8 xl:right-10"
    :class="yScrollValue < 50 ? 'hidden' : ''" @click="goTop">
    <div class="bg-red-700 p-2 px-3 text-white hover:bg-red-500 rounded-full lg:rounded-md" style="opacity:0.8">
      <span class="hidden lg:contents">GoTop</span>
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </div>

  <!-- 頁尾 -->
  <footer class="bg-slate-400/60 px-[10%] py-3 text-xl">
    <address class="sm:grid sm:grid-cols-2 sm:text-center">
      <div class="pl-3">
        <a href="mailto:saxhundred@gmail.com" title="寄信給我" class="inline-block">
          <i class="fa-regular fa-envelope"></i>
        </a>
        <span class="ml-2 w-5 inline-block">saxhundred@gmail.com</span>
      </div>
      <div class="pl-3">
        <a href="https://github.com/SaxYuan" target="_blank" title="連結至我的GitHub(另開分頁)" class="inline-block">
          <img :src="github" alt="我的GitHub" class="w-5">
        </a>
        <span class=" ml-2">SaxYuan</span>
      </div>
      <div class="text-center my-2 col-span-2">
        <span class="font-semibold sm:hidden ">Copyright © 2024 洪伯元</span>
        <span class="font-semibold hidden sm:contents">Copyright © 2024 洪伯元 All rights reserved.</span>
      </div>
    </address>
  </footer>
</template>

<style scoped></style>
