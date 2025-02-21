import { createBrowserRouter as createRouter, RouterProvider } from 'react-router-dom';
import { routes } from './route-config';

const router = createRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

export default function AppRouter() {
  return (
    <>
      {/* 开启 v7_startTransition 会导致 Suspense 失效 */}
      <RouterProvider router={router} future={{ v7_startTransition: false }} />
    </>
  );
}
