import { Activity } from 'lucide-react';

export const SystemInfo = () => {
  return (
    <div className="bg-gray-100/80 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-6 h-6 stroke-1 text-blue-600" />
        <span className="text-lg font-semibold text-gray-900">系统信息</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <p className="text-gray-600 text-sm mb-1">系统版本</p>
          <p className="text-gray-900 font-medium">iOS 17.2</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">运行时间</p>
          <p className="text-gray-900 font-medium">2小时36分钟</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">系统更新</p>
          <p className="text-gray-900 font-medium">已是最新</p>
        </div>
      </div>
    </div>
  );
}; 