import { createRouter, createWebHistory } from 'vue-router'

import Blogs from '@/pages/admin-panel/Blogs.vue'
import Create from '@/pages/admin-panel/Create.vue'
import Profile from '@/pages/admin-panel/Profile.vue'
import AdminPanel from '@/components/layouts/AdminPanel.vue'
import Home from '@/pages/admin-panel/Home.vue'

const routes = [
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: AdminPanel,
    children: [
      {
        path: '',
        name: 'AdminPanelHome',
        component: Home,
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
