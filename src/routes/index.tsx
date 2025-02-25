import type { RouteGuardContextValue } from './components/RouteGuard/context';
import { createBrowserRouter as createRouter, RouterProvider } from 'react-router-dom';
import { RouteGuardContext } from './components/RouteGuard/context';
import { routes } from './route-config';
import { routerGuards as guards } from './router-guards';

const router = createRouter(routes, {
  basename: import.meta.env.BASE_URL,
  future: {
    v7_relativeSplatPath: true,
  },
});

const routerGuardContextValue: RouteGuardContextValue = { guards };

export default function AppRouter() {
  return (
    <RouteGuardContext.Provider value={routerGuardContextValue}>
      {/* 开启 v7_startTransition 会导致 Suspense 失效 */}
      <RouterProvider router={router} future={{ v7_startTransition: false }} />
    </RouteGuardContext.Provider>
  );
}
