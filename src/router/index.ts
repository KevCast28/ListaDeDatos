import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Route01View from '../views/Route01View.vue'
import Route02View from '../views/Route02View.vue'
import Route03View from '../views/Route03View.vue'
import Route04View from '../views/Route04View.vue'
import Route05View from '../views/Route05View.vue'
import Route06View from '../views/Route06View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/route01',
      name: 'route01',
      component: Route01View
    },
    {
      path: '/route02',
      name: 'route02',
      component: Route02View
    },
    {
      path: '/route03',
      name: 'route03',
      component: Route03View
    },
    {
      path: '/route04',
      name: 'route04',
      component: Route04View
    },
    {
      path: '/route05',
      name: 'route05',
      component: Route05View
    },
    {
      path: '/route06',
      name: 'route06',
      component: Route06View
    },
  ]
})

export default router
