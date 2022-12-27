import { hrtime } from 'process'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('../views/Theme.vue'),
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/Join.vue'),
  },
  {
    path: '/joincomplete',
    name: 'joincomplete',
    component: () => import('../views/JoinComplete.vue'),
  },
  {
    path: '/findpw',
    name: 'findpw',
    component: () => import('../views/FindPw.vue'),
  },
  {
    path: '/resetpw',
    name: 'resetpw',
    component: () => import('../views/ResetPw.vue'),
  },
  {
    path: '/resetpwcomplete',
    name: 'resetpwcomplete',
    component: () => import('../views/ResetPwComplete.vue'),
  },
  {
    path: '/mymenu',
    name: 'mymenu',
    component: () => import('../views/MyMenu.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes,
})

export default router
