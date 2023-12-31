import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboardView',
      name: 'dashboardView',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/CouponView.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/OrderView.vue')
        }
      ]
    }
  ]
})

export default router
