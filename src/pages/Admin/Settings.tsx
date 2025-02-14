function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">系统设置</h2>
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">系统通知</h3>
              <p className="mt-1 text-sm text-gray-500">接收系统通知和更新提醒</p>
            </div>
            <button
              type="button"
              className="bg-blue-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">自动备份</h3>
              <p className="mt-1 text-sm text-gray-500">每天自动备份系统数据</p>
            </div>
            <button
              type="button"
              className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
