import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landingPage
    },
    /* {
      path: '/trayectoria',
      name: 'trayectoria',
      component: trayectoria
    }, */
  ]
})

export default router
