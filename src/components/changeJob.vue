<template>
  <div class="card rounded-3xl text-3xl text-center">
    <div class="font text-3xl bg-indigo-300/60 h-full w-full p-5 rounded-2xl font-bold pt-12">{{ title }}
      <img :src="picture" alt="我是插圖" class="card w-[100px] h-[100px] mx-auto sm:mt-5 lg:mt-9">
    </div>
    <div class="back text-2xl bg-indigo-300/60 h-full w-full p-5 rounded-2xl text-start sm:p-8 xl:text-3xl">
      <span class="leading-relaxed md:leading-snug xl:leading-relaxed text-slate-700">{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    picture: String,
    content: String
  }
};
</script>

<style scoped>
/* 卡片旋轉效果 */
.back {
  transform: rotateY(-180deg);
}

.card:hover .font {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(0);
}

.font,
.back {
  backface-visibility: hidden;
  position: absolute;
  transition: all 0.5s;
}

.card {
  position: relative;
}
</style>
