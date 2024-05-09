<script>
import myNav from './components/myNav.vue';
import workTabs from './components/workTabs.vue';
import themeTitle from './components/themeTitle.vue';
import workDetailsTitle from './components/workDetailsTitle.vue';
import schoolDetailsContent from './components/schoolDetailsContent.vue';
import workDetailsContent from './components/workDetailsContent.vue';
import changeJob from './components/changeJob.vue';
import myAdvantage from './components/myAdvantage.vue';
import myProject from './components/myProject.vue';
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
import tomatoPic from '@/assets/img/pic-tomato.jpg';

export default {
  components: {
    myNav,
    themeTitle,
    workTabs,
    workDetailsTitle,
    schoolDetailsContent,
    workDetailsContent,
    changeJob,
    myAdvantage,
    myProject,
  },
  data() {
    return {
      navItems: [
        { name: '成長軌跡', anchor: '#work' },
        { name: '轉職初衷', anchor: '#reason' },
        { name: '我的優勢', anchor: '#skill' },
        { name: '個人專案', anchor: '#myProject' },
        { name: '團體專案', anchor: '#groupProject' }
      ],
      workTabs: [
        { title: '大學期間', tabOrder: 1 },
        { title: '初出茅廬', tabOrder: 2 },
        { title: '新的挑戰', tabOrder: 3 },
        { title: '偏鄉工作', tabOrder: 4 },
      ],
      schoolExperiences: {
        club: [
          {
            title: '1.管樂社(102-106)',
            details: [
              '103-104 譜務長-管理樂團藏譜',
              '103-106 聲部長-掌握聲部成員練習狀況',
              '105-106 執行秘書-處理樂團行政庶務'
            ]
          },
          {
            title: '2.服務隊(102-104)',
            details: [
              '文編進修股-負責隊上文書庶務、辦理進修課程等',
            ]
          },
          {
            title: '3.系學會(103-105)',
            details: [
              '文藝編輯部-協助系上活動辦理、編輯系刊等',
            ]
          }
        ],
        volunteer: [
          {
            title: '1.社團法人台灣福氣社區關懷協會',
            details: [
              '雙老志工隊 隊員(102-106)',
              '103年 身障雙老家庭成果展 副召',
              '103年 志工隊隊員表揚大會 總召'
            ]
          },
          {
            title: '2.財團法人台灣兒童暨家庭扶助基金會',
            details: [
              '104年 冬令營 總召 (台中市北區分事務所)',
            ]
          },
          {
            title: '3.財團法人博幼社會福利基金會',
            details: [
              '104年 夏令營 工作人員(屏東中心)',
            ]
          },
        ],
        competition: [
          {
            details: [
              '102年 管樂合奏 大專團體B組 中區 優等',
              '103年 管樂合奏 大專團體B組 中區 特優',
              '104年 管樂合奏 大專團體B組 中區 特優',
              '105年 管樂合奏 大專團體B組 中區 優等',
            ]
          }
        ],
        teacher: [
          {
            details: [
              '靜宜大學 管樂社 第14屆 幹部訓練',
              '靜宜大學 管樂社 第16屆 幹部訓練',
              '靜宜大學 四社聯合幹部訓練'
            ]
          }
        ],
      },
      workExperiences: {
        first: {
          workContent: [
            { title: '1.協助住民日常生活照顧(如翻身移位、排泄、進食、身體清潔等)' }
          ],
          challenges: [
            {
              title: '1.照顧技巧與知識不足',
              details: [
                '社工養成較少提及照顧技巧、疾病，因此初期大約花費3個月的時間，與同事學習照顧技巧及常見疾病與應對的知識。'
              ]
            },
            {
              title: '2.輪班制度及與同事間的合作',
              details: [
                '機構為輪班制，能熟悉各班別的工作流程，且與同事間有良好默契，能及時處理突發狀況，並依狀況彈性調整工作流程。'
              ]
            },
            {
              title: '3.需與跨專業人員溝通',
              details: [
                '需與醫事人員(如護理師、物理治療師、營養師等)討論住民狀況時，需描述狀況詳細予醫事人員，才能進行有效的討論，因此需對住民狀況有詳細觀察，並對各種專業有基礎認識。'
              ]
            }
          ],
          achievements: [
            { title: '1.扎實的照顧技巧' },
            { title: '2.瞭解常見疾病及處理方式' },
            { title: '3.與跨專業人員的溝通' },
            { title: '4.臨機應變的能力' },
            { title: '5.團隊合作的能力' }
          ]
        },
        second: {
          workContent: [
            { title: '至案家提供個案所需的長照服務(如:身體清潔、餐食照顧、陪同就醫、陪伴服務、日常生活照顧等)' }
          ],
          challenges: [
            {
              title: '1.個別化的服務',
              details: [
                '居家服務需依照案家需求提供照顧服務，因此沒有固定的工作流程，需在每次的服務中因個案的回饋進行調整，以滿足個案的需求。'
              ]
            },
            {
              title: '2.需有獨立思考判斷的能力',
              details: [
                '因僅自己至案家服務，若發生突發事件，需判斷狀況是否能獨自處理，或是需要回報團隊等待指示。'
              ]
            }
          ],
          achievements: [
            { title: '1.提供以人為本的照顧服務' },
            { title: '2.見微知著的能力' },
            { title: '3.獨立思考的能力' },
          ]
        },
        third: {
          workContent: [
            { title: '1.至案家與個案及家屬討論及擬定照顧計畫' },
            { title: '2.協助案家連結所需的長照服務或其他社會資源' },
            { title: '3.定期追蹤服務使用狀況(每月電訪、每半年家訪)' },
            { title: '4.監督服務單位服務狀況' },
            { title: '5.異常事件與申訴處理' },
          ],
          challenges: [
            {
              title: '1.講求自我時間管理的工作',
              details: [
                '為確保個案權益，個管員需在三天內完成訪視、照顧計畫撰寫及審核、資源連結、每月需追蹤所有主責個案的狀況(約150-160案，合理案量為120案)等，加上單位位於台中市和平區，因幅員遼闊導致交通時間成本增加，因此需有良好的時間管理能力，才能應對繁重的工作。'
              ]
            },
            {
              title: '2.跨部門、跨單位、跨專業的整合與溝通',
              details: [
                '個管員需與主管機關(衛生局)、服務單位、案家等多方溝通協調，以確保個案使用服務的權益。'
              ]
            },
            {
              title: '3.負責培訓帶領新人的任務',
              details: [
                '成功地培訓了兩位新進同事，在為期三至四個月的培訓後，皆能具備獨立作業的能力，期間也需因應個別狀況，提供不同的教學方式。'
              ]
            },
          ],
          achievements: [
            { title: '1.良好的時間管理能力' },
            { title: '2.發現問題與需求能力' },
            { title: '3.豐富的溝通協調能力' },
          ]
        },
      },
      myAdvantage: {
        personal: [
          { itemTitle: '樂於分享及傾聽', itemContent: '能與同事建立良好的關係，進而促進穩定的團隊合作' },
          { itemTitle: '對事情充滿好奇', itemContent: '驅使我不斷地尋求新的知識，以及解決問題的方法' },
          { itemTitle: '勇於嘗試與學習', itemContent: '能快速適應新的工作環境和挑戰' },
          { itemTitle: '樂觀且情緒穩定', itemContent: '能在壓力下保持冷靜，並積極面對困難' },
          { itemTitle: '具備獨立思考能力', itemContent: '能獨立解決問題並提出創新的想法，為團隊帶來更多價值' },
        ],
        experience: [
          { itemTitle: '豐富的團隊合作經驗', itemContent: '能有效地與團隊成員合作，共同達成目標' },
          { itemTitle: '具備良好的時間管理能力', itemContent: '能有效地安排工作順序，確保任務按時完成' },
          { itemTitle: '我做事能夠保持彈性', itemContent: '能靈活應對不同的工作情況和需求，以確保工作的順利進行' },
          { itemTitle: '我抗壓性高', itemContent: '能在壓力下保持冷靜，並有效地應對各種挑戰和困難' },
        ],
        webDevelope:
          [CSS, HTML, JS, Tailwind, Vue, Bootstrap, Laravel, github],
      },
      yScrollValue: '',
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
      tomatoPic,
      rule: 1,
      arrowShow: false,
      isClickProcessing: false,
      typedText: '',
      currentIndex: 0
    };
  },
  methods: {
    // 回到最上面(到header)
    goTop() {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    },

    // 監聽goTop
    scrollWatch() {
      this.yScrollValue = window.scrollY;
    },

    // 打字動畫
    typeWriter() {
      const text = `Welcome to Bo-Yuan's Website！`;
      let index = 0;
      if (this.isClickProcessing) return;
      this.isClickProcessing = true;

      const intervalId = setInterval(() => {
        if (index <= text.length) {
          this.typedText = text.substring(0, index);
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            this.arrowShow = true;
          }, 200);
          this.isClickProcessing = false;
        }
      }, 100);
    },

    updateRule(tabOrder) {
      this.rule = tabOrder;
    },

    goToAnchor(area) {
      const element = document.querySelector(area);
      if (area === '#homePage') {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.arrowShow = false;
        this.typeWriter();
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  },

  mounted() {
    this.typeWriter();
    window.addEventListener('scroll', this.scrollWatch);
  },
}
</script>

<template>
  <div
    class="px-[18%] pt-[50%] bg-black opacity-70 h-[800px] text-center xs:pt-[30%] md:pt-[20%] lg:pt-[10%] xl:pt-[2%]"
    id="homePage">
    <span
      class="
    typing-animation text-white text-[40px] font-extrabold leading-loose xs:text-[10vw] sm:leading-snug sm:font-bold lg:text-[9vw]">{{
      typedText }}</span>
    <div class="text-white hidden" :class="{ 'arrowActive': arrowShow === true }">
      <span class="text-3xl block mt-16 sm:mt-4">Scroll Down</span>
      <div class="arrowDown"></div>
    </div>
  </div>

  <header class="bg-white/30 pl-[5%] sticky top-0 z-50 p-3 md:h-[60px]">
    <div class="absolute inset-0 backdrop-blur-md"></div>
    <div class="relative z-10 md:flex md:justify-between">
      <span class="font-bold text-2xl md:mt-1 md:text-3xl xl:text-4xl xl:mt-0 cursor-pointer hover:text-red-500"
        @click="goToAnchor('#homePage')">Bo-Yuan's Website</span>
      <myNav :items="navItems" />
    </div>
  </header>

  <!-- !成長軌跡 -->
  <div class="my-content bg-amber-300/40 mt-40 h-full">
    <themeTitle title="成長軌跡" itemId="work" />

    <workTabs :items="workTabs" @update:rule="updateRule" />

    <div class="bg-white mt-2 sm:mt-0 h-auto w-auto p-3 rounded sm:rounded-t-none">
      <!-- 大學期間  -->
      <div v-if="rule === 1">
        <workDetailsTitle title="靜宜大學" content="社會工作與兒童少年福利學系 畢業" years="(102.09-106.06)" required />
        <div class="grid gap-x-3 gap-y-3 grid-cols-1 md:grid-cols-2 mt-4">
          <schoolDetailsContent title="社團與幹部經驗" :bgColor="'bg-red-200/80'" :experiences="schoolExperiences.club" />
          <schoolDetailsContent title="志願服務" :bgColor="'bg-blue-200/80'" :experiences="schoolExperiences.volunteer" />
          <schoolDetailsContent title="競賽：全國學生音樂比賽" :bgColor="'bg-yellow-200/80'"
            :experiences="schoolExperiences.competition" />
          <schoolDetailsContent title="講師經歷" :bgColor="'bg-green-200/80'" :experiences="schoolExperiences.teacher" />
        </div>
      </div>

      <!-- 初出茅廬 -->
      <div v-else-if="rule === 2">
        <workDetailsTitle class=" " title="仁馨護理之家" content="照顧服務員" years="(106.08-108.04)" required />
        <workDetailsContent title="工作內容" :bgColor="'bg-yellow-200/80'" :items="workExperiences.first.workContent" />
        <workDetailsContent title="困境挑戰" :bgColor="'bg-red-200/80'" :items="workExperiences.first.challenges" />
        <workDetailsContent title="收穫" :bgColor="'bg-green-200/80'" :items="workExperiences.first.achievements" />
      </div>

      <!-- 初出茅廬2 -->
      <div v-else-if="rule === 3">
        <workDetailsTitle class=" " title="美家人力資源股份有限公司" content="照顧服務員" years="(108.05-110.02)" required />
        <workDetailsContent title="工作內容" :bgColor="'bg-yellow-200/80'" :items="workExperiences.second.workContent" />
        <workDetailsContent title="困境挑戰" :bgColor="'bg-red-200/80'" :items="workExperiences.second.challenges" />
        <workDetailsContent title="收穫" :bgColor="'bg-green-200/80'" :items="workExperiences.second.achievements" />
      </div>

      <!-- 初出茅廬3 -->
      <div v-else-if="rule === 4">
        <workDetailsTitle class=" " title="有限責任台灣伯拉罕共生照顧勞動合作社私立伯拉罕居家長照機構" content="個案管理員" years="(110.02-112.06)"
          required />
        <workDetailsContent title="工作內容" :bgColor="'bg-yellow-200/80'" :items="workExperiences.third.workContent" />
        <workDetailsContent title="困境挑戰" :bgColor="'bg-red-200/80'" :items="workExperiences.third.challenges" />
        <workDetailsContent title="收穫" :bgColor="'bg-green-200/80'" :items="workExperiences.third.achievements" />
      </div>
    </div>

    <!-- 轉職初衷 -->
    <section class="my-9">
      <themeTitle title="轉職初衷" itemId="reason" required />

      <div class="mt-3 bg-white h-[700px] md:h-[350px] lg:h-[300px] p-3 grid gap-2 md:grid-cols-3 rounded">
        <changeJob title="使用Excel引發寫程式興趣" :picture="codingPic" content="曾多次用Excel編寫程式，協助自己與同事提升工作效率，並從中引發寫程式的興趣。" />
        <changeJob title="樂於學習新事物" :picture="learningPic" content="對於有興趣的事情，我會利用閒暇時間不斷學習，並將所學應用於生活或工作中。" />
        <changeJob title="原領域成長趨緩" :picture="slowPic" content="能遊刃有餘地處理工作事務，並能獨自帶領新進人員，自覺成長速度已趨緩。" />
      </div>
    </section>

    <!-- 個人優勢 -->
    <section class="my-9">
      <themeTitle title="我的優勢" itemId="skill" />

      <div class="mt-3 bg-white p-3 grid gap-2 lg:grid-cols-3 rounded">
        <myAdvantage :title="'個人特質'" :bgColor="'bg-red-300/80'" :items="myAdvantage.personal" />
        <myAdvantage :title="'經驗累積'" :bgColor="'bg-blue-300/80'" :items="myAdvantage.experience" />
        <myAdvantage :title="'網頁開發'" :bgColor="'bg-green-300/80'" :pictures="myAdvantage.webDevelope" required />
      </div>
    </section>
  </div>

  <div class="my-content bg-orange-300/40">
    <!-- 個人專案 -->
    <section>
      <themeTitle title="個人專案" itemId="myProject" />
      <div class=" w-full h-3/4 py-3 lg:grid lg:grid-cols-2 lg:gap-5">
        <myProject name="TodoList" href="" />
        <myProject name="天氣卡" href="https://github.com/Bo-Yuan" />
        <myProject name="購物車" href="https://github.com/Bo-Yuan" />
        <myProject name="課務系統" href="https://github.com/Bo-Yuan" :picture="tomatoPic" />
      </div>
    </section>

    <!-- 團體專案 -->
    <section>
      <themeTitle title="團體專案" itemId="groupProject" />
      <div class="w-full h-3/4 flex flex-col py-3">
        <myProject name="遠大好農 ITOMATO" href="https://github.com/Bo-Yuan" :picture="tomatoPic" />
      </div>
    </section>
  </div>

  <!-- Gotop -->
  <div class="fixed right-2 bottom-28 z-10 cursor-pointer sm:right-5 lg:right-8 xl:right-10"
    :class="yScrollValue < 900 ? 'hidden' : ''" @click="goTop">
    <div class="bg-red-700 p-2 px-3 text-white hover:bg-red-500 rounded-full lg:rounded-md" style="opacity:0.8">
      <span class="hidden lg:contents">GoTop</span>
      <div class="lg:hidden -rotate-90">&#10132;</div>
    </div>
  </div>

  <!-- 頁尾 -->
  <footer class="bg-slate-300/60 px-[10%] py-3 text-xl">
    <address class="sm:grid sm:grid-cols-2 sm:text-center">
      <div class="pl-3">
        <a href="mailto:saxhundred@gmail.com" title="寄信給我" class="inline-block">
          <span class="ml-2 w-5 inline-block">saxhundred@gmail.com</span>
        </a>
      </div>
      <div class="pl-3">
        <a href="https://github.com/SaxYuan" target="_blank" title="連結至我的GitHub(另開分頁)" class="inline-block">
          <img :src="github" alt="我的GitHub" class="w-5">
        </a>
        <span class=" ml-2">SaxYuan</span>
      </div>
      <div class="text-center my-2 col-span-2">
        <span class="font-semibold sm:hidden ">Copyright © 2024 Bo-Yuan,Hong</span>
        <span class="font-semibold hidden sm:contents">Copyright © 2024 Bo-Yuan,Hong All rights reserved.</span>
      </div>
    </address>
  </footer>
</template>

<style scoped>
.typing-animation {
  /* overflow: hidden; */
  border-right: .05em solid orange;
  animation: typing 3s steps(40, end);
  overflow-wrap: break-word;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.arrowActive {
  @apply contents
}

.arrowDown {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 30px solid red;
  position: relative;
  animation: floatUpDown 2s ease-in-out infinite;
  margin: auto;
}

@keyframes floatUpDown {

  0%,
  100% {
    transform: translateY(5px);
  }

  50% {
    transform: translateY(20px);
  }
}

.my-content {
  width: 100%;
  margin: auto;
  padding: 2% 10%;
}
</style>