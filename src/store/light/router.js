import { lazy } from 'react'

// isDevMenu=true只在开发环境显示
const router = [
  {
    title: '首页',
    icon: 'home',
    className: 'm-sidebar-home',
    isVisible: true,
    path: '/light/admin/home',
    key: '/light/admin/home',
    component: lazy(() => import('../../views/light/admin/home/Index')),
  },
]

export default router
