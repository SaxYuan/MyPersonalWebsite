<script>
import arrowIcon from '@/assets/img/circle-up-solid.svg'

export default {
  data() {
    return {
      arrowIcon,
      show: true,
      rule: 1,
    };
  },

  methods: {
    changeAboutPage(e) {
      this.show = true;
      this.rule = e;
    },
  },
};

</script>

<template>
  <!-- ! 確定後要做的事 -->
  <!-- todo 1.把大量重複class做成CSS -->
  <!-- todo 2.把大量重複的架構做成composer -->

  <!-- !關於我-學經歷 -->
  <!-- todo hover顯示內容 -->
  <div id="about-me" class="my-content bg-blue-300 h-full">
    <h1 class=" text-6xl">過去的我：成長的軌跡</h1>

    <!-- !時間點頁籤 -->
    <div class="mt-10 grid gap-0.5 grid-cols-4 text-center ">
      <span class="text-2xl font-semibold rounded-tl-xl rounded-tr-xl p-2 hover:cursor-pointer"
        @click="changeAboutPage(1)" :class="{ 'active': show === true, 'active': rule === 1 }">在學期間(102-106)</span>
      <span class="text-2xl font-semibold rounded-tl-xl rounded-tr-xl p-2 hover:cursor-pointer"
        @click="changeAboutPage(2)" :class="{ 'active': show === true, 'active': rule === 2 }">初出茅廬(106-108)</span>
      <span class="text-2xl font-semibold rounded-tl-xl rounded-tr-xl p-2 hover:cursor-pointer"
        @click="changeAboutPage(3)" :class="{ 'active': show === true, 'active': rule === 3 }">再出茅廬(108-110)</span>
      <span class="text-2xl font-semibold rounded-tl-xl rounded-tr-xl p-2 hover:cursor-pointer"
        @click="changeAboutPage(4)" :class="{ 'active': show === true, 'active': rule === 4 }">三出茅廬(110-112)</span>
    </div>

    <!-- !關於我內容 -->
    <div class="bg-white min-h-[800px] h-auto w-auto p-5">
      <!-- !在學期間  -->
      <div v-if="rule === 1">
        <h4 class="text-3xl text-center ">靜宜大學 社會工作與兒童少年福利學系 畢業</h4>

        <div class="grid gap-x-3 gap-y-3 grid-cols-2 mt-4">

          <section class="flex flex-col bg-red-200 p-3">
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

          <section class="flex flex-col bg-blue-200 p-3">
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

          <section class="flex flex-col bg-yellow-200 p-3">
            <h2 class="text-3xl font-black">競賽：全國學生音樂比賽</h2>
            <span class="ml-6 text-xl">102年 管樂合奏 大專團體B組 中區 優等</span>
            <span class="ml-6 text-xl">103年 管樂合奏 大專團體B組 中區 特優</span>
            <span class="ml-6 text-xl">104年 管樂合奏 大專團體B組 中區 特優</span>
            <span class="ml-6 text-xl">105年 管樂合奏 大專團體B組 中區 優等</span>
          </section>

          <section class="flex flex-col bg-green-200 p-3">
            <h2 class="text-3xl font-black">講師經歷</h2>
            <span class="ml-6 text-xl">靜宜大學 管樂社 第14屆 幹部訓練</span>
            <span class="ml-6 text-xl">靜宜大學 管樂社 第16屆 幹部訓練</span>
            <span class="ml-6 text-xl">靜宜大學 四社聯合幹部訓練</span>
          </section>
        </div>
      </div>

      <!-- !初出茅廬 -->
      <div v-else-if="rule === 2">
        <h4 class="text-3xl text-center mb-4">仁馨護理之家 照顧服務員 (106.08-108.04)</h4>
        <div class=" grid gap-y-3">

          <section class="bg-yellow-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.協助住民日常生活照顧(如翻身、移位、排泄、進食、身體清潔等)</h3>
              <h3 class="text-2xl mt-2 font-semibold">2.協助住民參與機構活動</h3>
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

          <section class="bg-red-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
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
            </div>
          </section>

          <section class="bg-green-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.扎實的照顧技巧</h3>
              <h3 class="text-2xl mt-2 font-semibold">2.瞭解常見疾病與如何應對</h3>
              <h3 class="text-2xl mt-2 font-semibold">3.與跨專業人員的溝通</h3>
              <h3 class="text-2xl mt-2 font-semibold">4.臨機應變的能力</h3>
            </div>
          </section>
        </div>
      </div>

      <!-- !初出茅廬2 -->
      <div v-else-if="rule === 3">
        <h4 class="text-3xl text-center mb-4">美家人力資源股份有限公司 照顧服務員 (108.05-110.02)</h4>
        <div class=" grid gap-y-3">

          <section class="bg-yellow-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">至案家提供個案所需的長照服務(如:身體清潔、餐食照顧、陪同就醫、陪伴服務、日常生活照顧等)</h3>
            </div>
          </section>

          <section class="bg-red-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.客制化的服務</h3>
              <div class="px-4">
                <span class="text-xl">居家服務需依照案家需求提供照顧服務，因此沒有固定的工作流程，需在每次的服務中因著個案的回饋進行調整，以滿足個案的需求。</span>
              </div>
              <h3 class="text-2xl mt-2 font-semibold">2.需有獨立思考判斷的能力</h3>
              <div class="px-4">
                <span class="text-xl">因僅自己至案家服務，若發生突發事件，需判斷狀況是否能獨自處理，或是需要回報團隊等待指示。</span>
              </div>
            </div>
          </section>

          <section class="bg-green-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.提供以人為本的照顧服務</h3>
              <h3 class="text-2xl mt-2 font-semibold">2.培養見微知著的能力</h3>
              <h3 class="text-2xl mt-2 font-semibold">3.訓練獨立思考的能力</h3>
            </div>
          </section>
        </div>
      </div>


      <!-- !初出茅廬3 -->
      <div v-else-if="rule === 4">
        <h4 class="text-3xl text-center mb-4">有限責任台灣伯拉罕共生照顧勞動合作社私立伯拉罕居家長照機構<br>個案管理員 (110.02-112.06)</h4>
        <div class=" grid gap-y-3">
          <section class="bg-yellow-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">工作內容</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.至案家與個案及家屬討論及擬定照顧計畫</h3>
              <h3 class="text-2xl mt-2 font-semibold">2.協助案家連結所需的長照服務或其他社會資源</h3>
              <h3 class="text-2xl mt-2 font-semibold">3.定期追蹤服務使用狀況(每月電訪、每半年家訪)</h3>
              <h3 class="text-2xl mt-2 font-semibold">4.監督服務單位服務狀況</h3>
              <h3 class="text-2xl mt-2 font-semibold">5.異常事件與申訴處理</h3>
            </div>
          </section>

          <section class="bg-red-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">困境挑戰</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.偏鄉幅員遼闊且資源缺乏</h3>
              <div class="px-4">
                <span class="text-xl">單位位於台中市和平區，因幅員遼闊，所以交通的時間成本增加許多，也因此較少單位願意提供服務。</span>
              </div>
              <h3 class="text-2xl mt-2 font-semibold">2.跨部門、跨單位、跨專業的整合與溝通</h3>
              <div class="px-4">
                <span class="text-xl">個管員需與主管機關(衛生局)、服務單位、案家等多方溝通協調，以確保個案使用服務的權益。</span>
              </div>
              <h3 class="text-2xl mt-2 font-semibold">3.高壓的工作</h3>
              <div class="px-4">
                <span
                  class="text-xl">為確保個案權益，個管員需在三天內完成訪視、照顧計畫撰寫及審核、資源連結等工作，此外每月需追蹤所有主責個案的狀況(約150-160案，合理案量為120案)，因此需要在高壓力下完成工作。
                </span>
              </div>
            </div>
          </section>

          <section class="bg-green-200 p-3 flex">
            <div class="flex justify-center items-center border-r-4 border-gray-400">
              <h2 class="text-3xl font-black w-[80px] text-center">收穫</h2>
            </div>
            <div class="flex-auto ml-3">
              <h3 class="text-2xl mt-2 font-semibold">1.時間管理能力</h3>
              <h3 class="text-2xl mt-2 font-semibold">2.發現問題與需求能力</h3>
              <h3 class="text-2xl mt-2 font-semibold">3.溝通表達的能力</h3>
            </div>
          </section>
        </div>
      </div>
    </div>



    <!-- ?棄案:hover效果 -->
    <!-- <div class="w-full rounded bg-amber-400 h-2 flex">
      <div class="area-1 -mt-3 ml9">
        <img :src="arrowIcon" class="bg-white w-9 h-9 hover:bg-red-500 rounded-full rotate-180">

        <div class="content">
          <div class="bg-white">
            我是內容
          </div>
        </div>
      </div>
      <div class="area-1">
        <span>我是說明2</span>
        <img :src="arrowIcon" class="bg-white w-9 h-9 hover:bg-red-500 rounded-full rotate-180">
        <div class="content">
          <div class="bg-white">
            我是內容
          </div>
        </div>
      </div>
    </div>  -->

    <!-- !轉職初衷 -->
    <!-- todo hover顯示內容 -->
    <section>
      <h1 class=" text-6xl mt-9">轉職初衷</h1>
      <div class="mt-3 bg-green-300 h-[500px] p-10 grid gap-5 grid-cols-3">

        <div class="card bg-white/80 rounded-3xl text-3xl text-center ">
          <div class="font text-3xl bg-red-200 h-full w-full p-10 rounded-3xl">原領域成長曲線趨緩
            <img alt="我是插圖" class="card bg-red-300 w-[100px] h-[100px] mx-auto mb-9">
          </div>
          <div class="back text-3xl bg-blue-200 h-full w-full p-10 rounded-3xl">我是內容</div>
        </div>
        <div class="card bg-white/80 rounded-3xl text-3xl text-center ">
          <div class="font text-3xl bg-red-200 h-full w-full p-10 rounded-3xl">喜歡協助他人解決問題
            <img alt="我是插圖" class="card bg-red-300 w-[100px] h-[100px] mx-auto mb-9">
          </div>
          <div class="back text-3xl bg-blue-200 h-full w-full p-10 rounded-3xl">我是內容</div>
        </div>
        <div class="card bg-white/80 rounded-3xl text-3xl text-center ">
          <div class="font text-3xl bg-red-200 h-full w-full p-10 rounded-3xl">喜歡持續學習新的事物
            <img alt="我是插圖" class="card bg-red-300 w-[100px] h-[100px] mx-auto mb-9">
          </div>
          <div class="back text-3xl bg-blue-200 h-full w-full p-10 rounded-3xl">我是內容</div>
        </div>
      </div>
    </section>

    <!-- !個人技能:現在的我 -->
    <!-- todo hover 123 -->
    <section class="mt-9">
      <h1 class=" text-6xl">現在的我:個人技能</h1>
      <div class="mt-3 bg-orange-300 h-[600px] p-5 grid gap-2 grid-cols-3">
        <div class="bg-white/80 rounded-lg text-xl text-center p-10">
          <span class="text-3xl">個人特質</span>
          <ul>
            <li>1.樂於分享與傾聽</li>
            <li>2.充滿好奇</li>
            <li>3.持續學習</li>
            <li>4.勇於嘗試</li>
            <li>5.樂於助人</li>
          </ul>
        </div>
        <div class="bg-white/80 rounded-lg text-xl text-center p-10">
          <span class="text-3xl">經驗累積</span>
          <ul>
            <li>1.跨專業、跨部門合作</li>
            <li>2.抗壓性高</li>
            <li>3.處事保有彈性</li>
            <li>4.良好的溝通</li>
            <li>5.見微知著</li>
          </ul>
        </div>
        <div class="bg-white/80 rounded-lg text-xl text-center p-10">
          <span class="text-3xl">網頁技能</span>
          <!-- todo 放icon或圖片 -->
          <ul>
            <li>CSS/HTML</li>
            <li>Bootstrap / Tailwind</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Laravel</li>
          </ul>
        </div>
      </div>
    </section>
  </div>


  <!-- !學習歷程-->
  <section class="my-content bg-yellow-300 h-[900px]">
    <h5 class=" text-6xl">學習歷程</h5>
    <div class=" bg-red-300 w-full h-full p-5">
      <div class="flex p-4 basis-1/4 justify-center">
        <button class="bg-white/80 rounded mr-3 p-2">CSS/HTML</button>
        <button class="bg-white/80 rounded mr-3 p-2">JavaScript / Vue.js / Tailwind</button>
      </div>

      <div class="bg-white grid grid-cols-3 gap-3 p-5">

        <div class="bg-blue-200 w-full h-[200px] mx-auto p-2">
          <!-- CSS -->
          <span class="bg-black/40 text-white text-xl px-2 py-1">flex</span>
          <div class="bg-purple-500 w-10 h-10 rounded-full">github</div>
        </div>
        <div class="bg-blue-200 w-full h-[200px] mx-auto">縮圖2</div>
        <div class="bg-blue-200 w-full h-[200px] mx-auto">縮圖3</div>


        <!-- JS -->
        <div class="bg-blue-200 w-full h-[200px] mx-auto p-2">
          <span class="bg-black/40 text-white text-xl px-2 py-1">名稱+icon</span>
          <div class="bg-purple-500 w-10 h-10 rounded-full">github</div>
        </div>
        <div class="bg-blue-200 w-full h-[200px] mx-auto">縮圖2</div>
        <div class="bg-blue-200 w-full h-[200px] mx-auto">縮圖3</div>



      </div>
      <div>看更多</div>

    </div>





    <!-- ?棄案 -->
    <!-- <div class="area-2">
      <img :src="arrowIcon" class="try-1 bg-white w-9 h-9 hover:bg-red-500 rounded-full rotate-180 ">
      <div class="content bg-red-200 w-[300px] h-[300px]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div> -->
  </section>

  <!-- !專案展示 -->
  <section class="my-content bg-orange-300">
    <h5 class=" text-6xl">專案展示</h5>
    <!-- 切換按鈕 -->
    <div class="bg-green-300 w-full h-3/4 flex flex-col p-5">
      <div class="flex p-3 basis-1/4 justify-center">
        <button class="bg-white/80 rounded mr-3">TodoList</button>
        <button class="mr-3">天氣卡</button>
        <button class="mr-3">購物車</button>
        <button class="mr-3">課務系統</button>
      </div>
      <div class="bg-white p-5">

        <div class="bg-blue-200 w-full h-[200px] mx-auto  p-2">
          <!-- CSS -->
          <span class="bg-black/40 text-white text-xl px-2 py-1">TodoList</span>
          <div class="bg-purple-500 w-10 h-10 rounded-full">github</div>
        </div>




      </div>
    </div>
  </section>


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
  /* perspective: 1500px; */
}

/* .content {
  display: none;
}

.area-1:hover .content {
  display: block;

}

.try-1 {
  animation-name: move;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}

.area-2:hover .content {
  animation-play-state: paused;
  cursor: pointer;
  display: block;
}


@keyframes move {
  from {
    margin-left: 0%;
    background-color: rebeccapurple;
  }

  to {
    margin-left: 100%;
  }
} */



/* .tp-1:hover{
  display: block;
} */
</style>