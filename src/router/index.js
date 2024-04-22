import { createRouter, createWebHistory } from 'vue-router'
import WebsiteHome from '../views/WebsiteHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WebsiteHome
    },
    
  ]
})

export default router
