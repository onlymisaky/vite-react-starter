import type { RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/pages/Admin/Layout';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';
import { renderLazyLoader } from './utils';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: renderLazyLoader(() => import('@/pages/Home')),
      },
      {
        path: 'about',
        element: renderLazyLoader(() => import('@/pages/About')),
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="users" />,
          },
          {
            path: 'users',
            element: renderLazyLoader(() => import('@/pages/Admin/UserManage')),
          },
          {
            path: 'settings',
            element: renderLazyLoader(() => import('@/pages/Admin/Settings')),
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
