<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- ! 頁首 -->
  <header class="bg-red-400/70 h-[50px] flex justify-between sticky top-0 z-50">
    挖欸logo
    <nav class="bg-green-400 ">
      <link rel="stylesheet" href="#about-me">
      <RouterLink to="/" class="mr-3">錨點1</RouterLink>
      <RouterLink to="/" class="mr-3">錨點2</RouterLink>
      <RouterLink to="/" class="mr-3">錨點3</RouterLink>
    </nav>
  </header>

  <RouterView />

  <!-- ! Gotop按鈕 -->
  <button type="button" class="mr-5 sticky left-full bottom-[5%] bg-red-700 p-2">GoTop</button>

  <!-- ! 頁尾 -->
  <footer class="bg-blue-400 h-[100px]">
    我是頁尾
  </footer>
</template>

<style scoped></style>
