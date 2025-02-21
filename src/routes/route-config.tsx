import type { RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/pages/Admin/Layout';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';
import { renderLazyLoader, renderLazyLoaderWithGuard } from './utils';

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
            element: renderLazyLoaderWithGuard(() => import('@/pages/Admin/UserManage')),
          },
          {
            path: 'settings',
            element: renderLazyLoaderWithGuard(() => import('@/pages/Admin/Settings')),
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
