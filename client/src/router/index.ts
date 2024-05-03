import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Homeview.vue'
import FriendsView from '../pages/Friends.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/loginpage.vue')
    },
    {
      path: '/act',
      name: 'act',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Activityview.vue')
    },
    {
      path: '/pv',
      name: 'pv',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/personal.vue')
    },
    {
      path: '/ends',
      name: 'ends',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FriendsView
      //component: () => import('../pages/Friends.vue')
    }
  ]
})

export default router