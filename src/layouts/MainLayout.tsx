import RouteTransition from '@/routes/components/RouteTransition';
import { Link, Outlet } from 'react-router-dom';

const navs = [
  { label: '首页', to: '/home' },
  { label: '关于', to: '/about' },
  { label: '管理', to: '/admin' },
];

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              {navs.map((nav) => (
                <Link
                  key={nav.to}
                  to={nav.to}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <RouteTransition>
            <Outlet />
          </RouteTransition>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
