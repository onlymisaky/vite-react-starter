import { memo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function AdminLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const menuItems = [
    { path: '/admin/users', label: '用户管理' },
    { path: '/admin/settings', label: '系统设置' },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex">
        {/* 侧边栏 */}
        <aside className="w-48 min-h-[calc(100vh-12rem)] border-r border-gray-200">
          <nav className="p-4 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 min-h-[calc(100vh-12rem)]">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default memo(AdminLayout);
