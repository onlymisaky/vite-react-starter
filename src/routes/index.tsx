import { createBrowserRouter as createRouter, RouterProvider } from 'react-router-dom';
import { routes } from './route-config';

const router = createRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

export default function AppRouter() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
