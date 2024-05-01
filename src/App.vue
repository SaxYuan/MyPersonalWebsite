<script>
import { RouterLink, RouterView } from 'vue-router';
import github from '@/assets/img/icon-github.png';
import CSS from '@/assets/img/icon-CSS.png';
import HTML from '@/assets/img/icon-HTML.png';
import JS from '@/assets/img/icon-JS.png';
import Tailwind from '@/assets/img/icon-Tailwind.png';
import Vue from '@/assets/img/icon-Vue.png';
import Bootstrap from '@/assets/img/icon-Bootstrap.png';
import Laravel from '@/assets/img/icon-Laravel.png';
import codingPic from '@/assets/img/pic-coding.png';
import learningPic from '@/assets/img/pic-learning.png';
import slowPic from '@/assets/img/pic-slow.png';

export default {
  data() {
    return {
      yScrollValue: '',
      RouterLink,
      RouterView,
      github,
      CSS,
      HTML,
      JS,
      Tailwind,
      Vue,
      Bootstrap,
      Laravel,
      codingPic,
      learningPic,
      slowPic,
      show: true,
      rule: 1,
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
    changeAboutPage(e) {
      this.show = true;
      this.rule = e;
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

  <!-- <RouterView /> -->
<!-- ! 確定後要做的事 -->
  <!-- todo 1.把大量重複class寫在style -->
  <!-- todo 2.把大量重複的架構做成組件 -->

  <!-- !學經歷 -->
  <div class="my-content bg-yellow-300 h-full" >
    <h1 class="text-4xl text-center sm:text-start mt-3 sm:text-5xl scroll-mt-32 md:scroll-mt-24" id="work">成長軌跡</h1>
    <hr class="border-2 border-white mt-1 ">

    <!-- !時間點頁籤 -->
    <div class="mt-5 grid gap-0.5 grid-cols-1 sm:grid-cols-4 text-center">
      <span class="text-xl sm:text-2xl font-semibold rounded sm:rounded-t-xl sm:rounded-b-none p-2 hover:cursor-pointer"
        @click="changeAboutPage(1)" :class="{ 'active': show === true, 'active': rule === 1 }">大學期間(102-106)</span>
      <span class="text-xl sm:text-2xl font-semibold rounded sm:rounded-t-xl sm:rounded-b-none p-2 hover:cursor-pointer"
        @click="changeAboutPage(2)" :class="{ 'active': show === true, 'active': rule === 2 }">初出茅廬(106-108)</span>
      <span class="text-xl sm:text-2xl font-semibold rounded sm:rounded-t-xl sm:rounded-b-none p-2 hover:cursor-pointer"
        @click="changeAboutPage(3)" :class="{ 'active': show === true, 'active': rule === 3 }">轉換單位(108-110)</span>
      <span class="text-xl sm:text-2xl font-semibold rounded sm:rounded-t-xl sm:rounded-b-none p-2 hover:cursor-pointer"
        @click="changeAboutPage(4)" :class="{ 'active': show === true, 'active': rule === 4 }">偏鄉工作(110-112)</span>
    </div>

    <!-- !關於我內容 -->
    <div class="bg-white mt-2 sm:mt-0 h-auto w-auto p-5 rounded sm:rounded-t-none">
      <!-- !在學期間  -->
      <div v-if="rule === 1">
        <h4 class="text-xl sm:text-3xl text-center">靜宜大學 <br class="md:hidden">社會工作與兒童少年福利學系 畢業</h4>

        <div class="grid gap-x-3 gap-y-3 grid-cols-1 md:grid-cols-2 mt-4">
          <section class="flex flex-col bg-red-200 p-3 rounded">
            <h2 class="text-3xl font-black">社團與幹部經驗</h2>
            <h3 class="text-2xl mt-2 font-semibold">1.管樂社(102-106)</h3>
            <span class="ml-6 text-xl">103-104 譜務長-樂團藏譜管理</span>
            <span class="ml-6 text-xl">103-106 聲部長-督導聲部成員</span>
            <span class="ml-6 text-xl">105 &ensp;&ensp;&ensp;&ensp;執行秘書-處理樂團行政庶務</span>

            <h3 class="text-2xl mt-2 font-semibold">2.服務隊(102-104)</h3>
            <span class="ml-6 text-xl">文編進修股-負責文書庶務、辦理進修課程等</span>

            <h3 class="text-2xl mt-2 font-semibold">3.系學會(103-105)</h3>
            <span class="ml-6 text-xl">文藝編輯部-協助系上活動辦理、編輯系刊等</span>
          </section>

          <section class="flex flex-col bg-blue-200 p-3 rounded">
            <h2 class="text-3xl font-black">志願服務</h2>
            <h3 class="text-2xl mt-2 font-semibold">1.社團法人台灣福氣社區關懷協會</h3>
            <span class="ml-6 text-xl">雙老志工隊 隊員(102-106)</span>
            <span class="ml-6 text-xl">103年 身障雙老家庭成果展 副召</span>
            <span class="ml-6 text-xl">103年 志工隊隊員表揚大會 總召</span>

            <h3 class="text-2xl mt-2 font-semibold">2.財團法人台灣兒童暨家庭扶助基金會</h3>
            <span class="ml-6 text-xl">104年 冬令營 總召 (台中市北區分事務所)</span>

            <h3 class="text-2xl mt-2 font-semibold">3.財團法人博幼社會福利基金會</h3>
            <span class="ml-6 text-xl">104年 夏令營 工作人員(屏東中心)</span>
          </section>

          <section class="flex flex-col bg-yellow-200 p-3 rounded">
            <h2 class="text-3xl font-black">競賽：全國學生音樂比賽</h2>
            <span class="ml-6 text-xl">102年 管樂合奏 大專團體B組 中區 優等</span>
            <span class="ml-6 text-xl">103年 管樂合奏 大專團體B組 中區 特優</span>
            <span class="ml-6 text-xl">104年 管樂合奏 大專團體B組 中區 特優</span>
            <span class="ml-6 text-xl">105年 管樂合奏 大專團體B組 中區 優等</span>
          </section>

          <section class="flex flex-col bg-green-200 p-3 rounded">
            <h2 class="text-3xl font-black">講師經歷</h2>
            <span class="ml-6 text-xl">靜宜大學 管樂社 第14屆 幹部訓練</span>
            <span class="ml-6 text-xl">靜宜大學 管樂社 第16屆 幹部訓練</span>
            <span class="ml-6 text-xl">靜宜大學 四社聯合幹部訓練</span>
          </section>
        </div>
      </div>

      <!-- !初出茅廬 -->
      <div v-else-if="rule === 2">
        <h4 class="text-2xl sm:text-3xl text-center mb-4">仁馨護理之家 <br class="md:hidden">照顧服務員 <br class="md:hidden">(106.08-108.04)</h4>
        <div class=" grid gap-y-3">

          <section class="bg-yellow-200 p-3 sm: rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.協助住民日常生活照顧(如翻身、移位、排泄、進食、身體清潔等)</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.協助住民參與機構活動</h3>
            </div>
          </section>

          <!-- ?另一種寫法 -->
          <!-- <section class="bg-red-200 p-3">
            <h2 class="text-3xl font-black">困境與挑戰</h2>
            <h3 class="text-2xl mt-2 font-semibold">1.照顧技巧與知識不足</h3>
            <div class="px-4">
              <span class="text-xl">社工養成較少提及照顧技巧、疾病，因此初期花費許多時間在學習照顧技巧及常見疾病與應對的知識。</span>
            </div>
            <h3 class="text-2xl mt-2 font-semibold">2.輪班制度及與同事間的合作</h3>
            <div class="px-4">
              <span class="text-xl">機構為輪班制，因此需熟悉各班別的工作流程，且因共事的同事不固定，因此需要有良好的默契，才能在突發狀況發生時能及時應變處理。</span>
            </div>
            <h3 class="text-2xl mt-2 font-semibold">3.需與跨專業人員溝通</h3>
            <div class="px-4">
              <span class="text-xl">當有個別住民狀況需要與醫事人員(如護理師、物理治療師、營養師等)討論時，需描述狀況詳細予醫事人員，才能進行有效的討論。</span>
            </div>
          </section> -->

          <section class="bg-red-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.照顧技巧與知識不足</h3>
              <div class="px-4">
                <span class="text-xl">社工養成較少提及照顧技巧、疾病，因此初期花費許多時間在學習照顧技巧及常見疾病與應對的知識。</span>
              </div>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.輪班制度及與同事間的合作</h3>
              <div class="px-4">
                <span class="text-xl">機構為輪班制，因此需熟悉各班別的工作流程，且因共事的同事不固定，因此需要有良好的默契，才能在突發狀況發生時能及時應變處理。</span>
              </div>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.需與跨專業人員溝通</h3>
              <div class="px-4">
                <span class="text-xl">當有個別住民狀況需要與醫事人員(如護理師、物理治療師、營養師等)討論時，需描述狀況詳細予醫事人員，才能進行有效的討論。</span>
              </div>
            </div>
          </section>

          <section class="bg-green-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.扎實的照顧技巧</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.瞭解常見疾病與如何應對</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.與跨專業人員的溝通</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">4.臨機應變的能力</h3>
            </div>
          </section>
        </div>
      </div>

      <!-- !初出茅廬2 -->
      <div v-else-if="rule === 3">
        <h4 class="text-2xl sm:text-3xl text-center mb-4">美家人力資源股份有限公司 <br class="md:hidden">照顧服務員 <br class="md:hidden">(108.05-110.02)</h4>
        <div class=" grid gap-y-3">

          <section class="bg-yellow-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">至案家提供個案所需的長照服務(如:身體清潔、餐食照顧、陪同就醫、陪伴服務、日常生活照顧等)</h3>
            </div>
          </section>

          <section class="bg-red-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.個別化的服務</h3>
              <div class="px-4">
                <span class="text-xl">居家服務需依照案家需求提供照顧服務，因此沒有固定的工作流程，需在每次的服務中因著個案的回饋進行調整，以滿足個案的需求。</span>
              </div>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.需有獨立思考判斷的能力</h3>
              <div class="px-4">
                <span class="text-xl">因僅自己至案家服務，若發生突發事件，需判斷狀況是否能獨自處理，或是需要回報團隊等待指示。</span>
              </div>
            </div>
          </section>

          <section class="bg-green-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.提供以人為本的照顧服務</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.培養見微知著的能力</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.訓練獨立思考的能力</h3>
            </div>
          </section>
        </div>
      </div>


      <!-- !初出茅廬3 -->
      <div v-else-if="rule === 4">
        <h4 class="text-2xl sm:text-3xl text-center mb-4">有限責任台灣伯拉罕共生照顧勞動合作社私立伯拉罕居家長照機構<br>個案管理員 <br class="md:hidden">(110.02-112.06)</h4>
        <div class=" grid gap-y-3">
          <section class="bg-yellow-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.至案家與個案及家屬討論及擬定照顧計畫</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.協助案家連結所需的長照服務或其他社會資源</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.定期追蹤服務使用狀況(每月電訪、每半年家訪)</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">4.監督服務單位服務狀況</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">5.異常事件與申訴處理</h3>
            </div>
          </section>

          <section class="bg-red-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.偏鄉幅員遼闊且資源缺乏</h3>
              <div class="px-4">
                <span class="text-xl">單位位於台中市和平區，因幅員遼闊，所以交通的時間成本增加許多，也因此較少單位願意提供服務。</span>
              </div>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.跨部門、跨單位、跨專業的整合與溝通</h3>
              <div class="px-4">
                <span class="text-xl">個管員需與主管機關(衛生局)、服務單位、案家等多方溝通協調，以確保個案使用服務的權益。</span>
              </div>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.高壓的工作</h3>
              <div class="px-4">
                <span
                  class="text-xl">為確保個案權益，個管員需在三天內完成訪視、照顧計畫撰寫及審核、資源連結等工作，此外每月需追蹤所有主責個案的狀況(約150-160案，合理案量為120案)，因此需要在高壓力下完成工作。
                </span>
              </div>
            </div>
          </section>

          <section class="bg-green-200 p-3 sm:flex rounded">
            <div class="flex justify-center items-center border-b-2 border-gray-400 sm:border-r-4 sm:border-b-0">
              <h2 class="text-2xl sm:text-3xl font-black sm:w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">1.時間管理能力</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">2.發現問題與需求能力</h3>
              <h3 class="text-xl sm:text-2xl mt-2 font-semibold">3.溝通表達的能力</h3>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- !轉職初衷 -->
    <!-- todo hover顯示內容 -->
    <section>
      <h1 class="text-4xl text-center sm:text-start sm:text-5xl mt-9 scroll-mt-32 md:scroll-mt-24" id="reason">轉職初衷</h1>
      <hr class="border-2 border-white mt-1">

      <div class="mt-3 bg-white h-[700px] md:h-[350px] lg:h-[300px] p-5 grid gap-2 md:grid-cols-3 rounded">
        <div class="card rounded-3xl text-3xl text-center ">
          <div class="font text-3xl bg-red-200 h-full w-full p-5 rounded-3xl font-bold">使用Excel引發寫程式興趣
            <img :src="codingPic" alt="我是插圖" class="card w-[100px] h-[100px] mx-auto sm:mt-5  lg:mt-9">
          </div>
          <div class="back text-2xl bg-blue-200 h-full w-full p-5 rounded-3xl text-start sm:p-9 xl:text-3xl">曾多次用Excel編寫程式，協助自己與同事提升工作效率，並從中引發寫程式的興趣。</div>
        </div>
        <div class="card rounded-3xl text-3xl text-center ">
          <div class="font text-3xl bg-red-200 h-full w-full p-5 rounded-3xl lg:pt-9 font-bold">樂於學習新事物
            <img :src="learningPic" alt="我是插圖" class="card w-[100px] h-[100px] mx-auto mt-5 lg:mt-9">
          </div>
          <div class="back text-2xl bg-blue-200 h-full w-full p-5 rounded-3xl text-start sm:p-9 xl:text-3xl">對於有興趣的事情，會利用閒暇時間學習，並運用在生活或工作上。</div>
        </div>
        <div class="card rounded-3xl text-3xl text-center">
          <div class="font text-3xl bg-red-200 h-full w-full p-5 rounded-3xl lg:pt-9 font-bold">原領域成長趨緩
            <img :src="slowPic" alt="我是插圖" class="card w-[100px] h-[100px] mx-auto mt-5 lg:mt-9">
          </div>
          <div class="back text-2xl bg-blue-200 h-full w-full p-5 rounded-3xl text-start sm:p-9 xl:text-3xl">能遊刃有餘地處理工作事務，並能獨自帶領新進人員，自覺成長速度已趨緩。
          </div>
        </div>
        
      </div>
    </section>

    <!-- !個人技能:現在的我 -->
    <!-- todo hover 123 -->
    <section class="my-9">
      <h1 class="text-4xl text-center sm:text-start sm:text-5xl mt-9 scroll-mt-32 md:scroll-mt-24" id="skill">我的優勢</h1>
      <hr class="border-2 border-white mt-1">
      <div class="mt-3 bg-white p-5 grid gap-2 lg:grid-cols-3 rounded">
        <div class="bg-red-300/80 rounded-lg text-xl text-center p-5">
          <span class="text-3xl font-bold">個人特質</span>
          <ul class="mt-3 ml-53 text-start">
            <li>1.樂於分享與傾聽</li>
            <li>2.對事情充滿好奇</li>
            <li>3.勇於嘗試與學習</li>
            <li>4.樂觀且情緒穩定</li>
            <li>5.有獨立思考能力</li>
          </ul>
        </div>
        <div class="bg-red-300/80 rounded-lg text-xl text-center p-5">
          <span class="text-3xl font-bold">經驗累積</span>
          <ul class="mt-3 ml-3 text-start">
            <li>1.豐富跨專業、跨部門合作與溝通</li>
            <li>2.良好的時間管理能力</li>
            <li>3.做事能保有彈性</li>
            <li>4.抗壓性高</li>
            <li>5.</li>
          </ul>
        </div>
        <div class="bg-red-300/80 rounded-lg text-xl text-center p-5">
          <span class="text-3xl font-bold">網頁開發</span>
          <div class="mt-3 grid grid-cols-4 items-center gap-3 px-3">
            <img :src="CSS" alt="CSS" class="">
            <img :src="HTML" alt="HTML" class="">
            <img :src="JS" alt="JS" class="">
            <img :src="Bootstrap" alt="Bootstrap" class="">
            <img :src="Vue" alt="Vue" class="">
            <img :src="Tailwind" alt="Tailwind" class="">
            <img :src="Laravel" alt="Laravel" class="">
            <img :src="github" alt="github" class="">
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- !個人專案 -->
  <section class="my-content bg-orange-300">
    <h5 class="text-4xl sm:text-5xl text-center sm:text-start scroll-mt-32 md:scroll-mt-24 mt-3" id="myProject">個人專案</h5>
    <hr class="border-2 border-white mt-1 rounded">
    
    <div class=" w-full h-3/4 pt-3 pb-5 lg:grid lg:grid-cols-2 lg:gap-5">
      <div class="bg-white p-2 rounded mb-2">
        <div class="bg-blue-200 w-full mx-auto  p-2 flex grid-cols-2 rounded">
          <span class="bg-black/40 text-white text-xl px-2 py-1">TodoList</span>
          <img :src="github" alt="" class="w-10 ml-2">
        </div>
      </div>
      <div class="bg-white p-2 rounded mb-2">
        <div class="bg-blue-200 w-full mx-auto  p-2 flex grid-cols-2 rounded">
          <span class="bg-black/40 text-white text-xl px-2 py-1">天氣卡</span>
          <img :src="github" alt="" class="w-10 ml-2">
        </div>
      </div>
      <div class="bg-white p-2 rounded mb-2">
        <div class="bg-blue-200 w-full mx-auto  p-2 flex grid-cols-2 rounded">
          <span class="bg-black/40 text-white text-xl px-2 py-1">購物車</span>
          <img :src="github" alt="" class="w-10 ml-2">
        </div>
      </div>
      <div class="bg-white p-2 rounded mb-2">
        <div class="bg-blue-200 w-full mx-auto  p-2 flex grid-cols-2 rounded">
          <span class="bg-black/40 text-white text-xl px-2 py-1">課務系統</span>
          <img :src="github" alt="" class="w-10 ml-2">
        </div>
      </div>
    </div>
  </section>

  <!-- !團體專案 -->
  <section class="my-content bg-orange-300">
    <h5 class="text-4xl text-center sm:text-start sm:text-5xl scroll-mt-32 md:scroll-mt-24" id="groupProject">團體專案</h5>
    <hr class="border-2 border-white mt-1 rounded">
    <!-- 切換按鈕 -->
    <div class="w-full h-3/4 flex flex-col pt-3 pb-5">
      <div class="bg-white p-2 rounded">
        <div class="bg-blue-200 w-full mx-auto  p-2 flex grid-cols-2">
          <span class="bg-black/40 text-white text-xl px-2 py-1">遠大好農 ITOMATO</span>
          <img :src="github" alt="" class="w-10 ml-2">
        </div>
      </div>
    </div>
  </section>

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

<style scoped>
.my-content {
  width: 100%;
  margin: auto;
  padding: 2% 10%;
}

/* 頁籤點擊顯示效果 */
.active {
  @apply bg-white
}

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