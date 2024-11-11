// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

import AdminPanel from '@/pages/admin-panel/Index.vue'
import Blogs from 'src/pages/admin-panel/Blogs.vue'
import Create from '@/pages/admin-panel/Create.vue'
import Profile from '@/pages/admin-panel/Profile.vue'

const routes = [
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: AdminPanel,
    children: [
      {
        path: '',
        name: 'AdminPanelHome',
        component: AdminPanel,
      },
      {
        path: 'blogs',
        name: 'Blogs',
        component: Blogs,
      },
      {
        path: 'create',
        name: 'Create',
        component: Create,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
