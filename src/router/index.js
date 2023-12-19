import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/employee',
      name: 'employee',
      component: () => import('../views/Employee.vue')
    },
    {
      path: '/shift',
      name: 'shift',
      component: () => import('../views/Shift.vue')
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('../views/Attendance.vue')
    }
  ]
})

export default router
