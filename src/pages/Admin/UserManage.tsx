const theadColStyle = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
const tbodyColStyle = 'px-6 py-4 whitespace-nowrap';

function UserManage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">用户管理</h2>
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className={theadColStyle}>
                  用户名
                </th>
                <th className={theadColStyle}>
                  角色
                </th>
                <th className={theadColStyle}>
                  状态
                </th>
                <th className={theadColStyle}>
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className={`${tbodyColStyle} text-sm text-gray-900`}>张三</td>
                <td className={`${tbodyColStyle} text-sm text-gray-500`}>管理员</td>
                <td className={`${tbodyColStyle}`}>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    活跃
                  </span>
                </td>
                <td className={`${tbodyColStyle} text-sm text-gray-500`}>
                  <button type="button" className="text-blue-600 hover:text-blue-900">编辑</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
