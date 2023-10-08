import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import APost from '../views/APost.vue'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/post/:id',
      name: 'apost',
      component: APost
    },
    {
      path: '/',
      name: 'weather',
      component: WeatherView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
