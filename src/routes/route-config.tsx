import type { RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import About from '@/pages/About';
import AdminLayout from '@/pages/Admin/Layout';
import Settings from '@/pages/Admin/Settings';
import UserManage from '@/pages/Admin/UserManage';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';

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
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
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
            element: <UserManage />,
          },
          {
            path: 'settings',
            element: <Settings />,
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
