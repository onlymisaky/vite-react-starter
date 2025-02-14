function Admin() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">管理面板</h1>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded">
          <h2 className="text-lg font-semibold mb-2">用户管理</h2>
          <p className="text-gray-600">这里是管理员专属内容</p>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <h2 className="text-lg font-semibold mb-2">系统设置</h2>
          <p className="text-gray-600">只有管理员可以访问此页面</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
