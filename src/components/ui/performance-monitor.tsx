import { Cpu, HardDrive } from 'lucide-react';

export const PerformanceMonitor = () => {
  return (
    <div className="bg-gray-100/80 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Cpu className="w-6 h-6 stroke-1 text-blue-600" />
        <span className="text-lg font-semibold text-gray-900">性能监控</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">CPU 使用率</p>
            <p className="text-gray-900 font-medium">45%</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{width: '45%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">内存使用</p>
            <p className="text-gray-900 font-medium">3.6GB / 6GB</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">GPU 使用率</p>
            <p className="text-gray-900 font-medium">30%</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{width: '30%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">存储空间</p>
            <p className="text-gray-900 font-medium">128GB / 256GB</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{width: '50%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}; 