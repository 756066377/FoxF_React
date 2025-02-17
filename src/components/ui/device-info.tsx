import { Smartphone } from 'lucide-react';

export const DeviceInfo = () => {
  return (
    <div className="bg-gray-100/80 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Smartphone className="w-6 h-6 text-blue-600" />
        <span className="text-lg font-semibold text-gray-900">设备信息</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <p className="text-gray-600 text-sm mb-1">设备型号</p>
          <p className="text-gray-900 font-medium">iPhone 15 Pro</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">设备ID</p>
          <p className="text-gray-900 font-medium">FXID78901234</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">SELinux状态</p>
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            已启用
          </div>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">内核版本</p>
          <p className="text-gray-900 font-medium">Linux 6.1.0-18</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">设备指纹</p>
          <p className="text-gray-900 font-medium truncate" title="a1b2c3d4e5f6g7h8i9j0">
            a1b2c3d4e5f6g7h8i9j0
          </p>
        </div>
      </div>
    </div>
  );
}; 