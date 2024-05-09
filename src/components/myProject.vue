<template>
  <div class="bg-white p-2 rounded">
    <div class="bg-blue-200 w-full mx-auto p-2 rounded">
      <span class="bg-black/40 text-white text-xl px-2 py-1 rounded inline-block">{{ name }}</span>
      <a :href="href" @click.prevent="openLink" class="cursor-pointer">
        <img :src="github" alt="" class="w-10 ml-2 mb-1 inline-block">
      </a>
      <img :src="picture" alt="" class="w-[99%] mx-auto rounded ">
    </div>
  </div>
</template>

<script>
import github from '@/assets/img/icon-github.png';


export default {
  props: {
    href: String,
    name: String,
    picture: String,
  },
  data() {
    return {
      github,
    }
  },
  methods: {
    openLink() {
      if (!this.href) return;
      window.open(this.href, '_blank');
    }
  },
}
</script>