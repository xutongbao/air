import { lazy } from 'react'

// isDevMenu=true只在开发环境显示
const router = [
  {
    title: '首页',
    icon: 'home',
    className: 'm-sidebar-home',
    isVisible: true,
    path: '/light/admin/home',
    component: lazy(() => import('../../views/light/admin/home/Index')),
  },
  {
    title: '应用管理',
    icon: 'base',
    isVisible: true,
    path: '/light/admin/applicationPlus',
    component: lazy(() => import('../../views/light/admin/applicationPlus/Index')),
  },
]

export default router
