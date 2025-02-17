import { Wifi } from 'lucide-react';

export const NetworkStatus = () => {
  return (
    <div className="bg-gray-100/80 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Wifi className="w-6 h-6 stroke-1 text-blue-600" />
        <span className="text-lg font-semibold text-gray-900">网络状态</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-gray-600 text-sm mb-1">连接类型</p>
          <p className="text-gray-900 font-medium">WiFi - 5G</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">IP 地址</p>
          <p className="text-gray-900 font-medium">192.168.1.100</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">信号强度</p>
          <p className="text-gray-900 font-medium">优秀</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">网络延迟</p>
          <p className="text-gray-900 font-medium">32ms</p>
        </div>
      </div>
    </div>
  );
}; 