import type { RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/pages/Admin/Layout';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';
import { lazyLoadComponent } from './utils';

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
        element: lazyLoadComponent(() => import('@/pages/Home')),
      },
      {
        path: 'about',
        element: lazyLoadComponent(() => import('@/pages/About')),
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
            element: lazyLoadComponent(() => import('@/pages/Admin/UserManage')),
          },
          {
            path: 'settings',
            element: lazyLoadComponent(() => import('@/pages/Admin/Settings')),
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
