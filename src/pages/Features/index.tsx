"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { HomeIcon, Cpu, LogOut, Crosshair, MousePointer2, Crown, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MockupCodeDialog } from "@/components/ui/mockup-code-dialog";
import { Notification } from "@/components/ui/notification";
import { GradientText } from "@/components/ui/gradient-text";
import { CountUp } from "@/components/ui/count-up";

const dockItems = [
  {
    title: '主页',
    icon: <HomeIcon className='h-full w-full text-slate-800' />,
    link: '/home'
  },
  {
    title: '功能',
    icon: <Cpu className='h-full w-full text-slate-800' />,
    link: '/features'
  },
  {
    title: '退出',
    icon: <LogOut className='h-full w-full text-slate-800' />,
    link: '/'
  }
];

const Features: React.FC = () => {
  const navigate = useNavigate();
  const [isAimEnabled, setIsAimEnabled] = useState(false);
  const [isLockEnabled, setIsLockEnabled] = useState(false);
  const [driverLogs, setDriverLogs] = useState<Array<{text: string; prefix?: string; className?: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({
    isOpen: false,
    message: "",
    type: "info"
  });

  const handleLoadDriver = async () => {
    setIsLoading(true);
    setIsDialogOpen(true);
    setDriverLogs([
      { text: "正在初始化驱动..." },
      { text: "检查系统兼容性...", prefix: "$" },
    ]);

    // 模拟加载过程
    await new Promise(r => setTimeout(r, 1000));
    setDriverLogs(prev => [...prev, 
      { text: "系统兼容性检查通过", prefix: "$", className: "text-success" }
    ]);

    await new Promise(r => setTimeout(r, 800));
    setDriverLogs(prev => [...prev, 
      { text: "正在加载驱动文件...", prefix: "$" }
    ]);

    await new Promise(r => setTimeout(r, 1200));
    setDriverLogs(prev => [...prev, 
      { text: "驱动加载成功!", prefix: "√", className: "text-success" }
    ]);

    setIsLoading(false);
  };

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({ isOpen: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  const handleToggleAim = async () => {
    try {
      // 这里是你的功能开启/关闭逻辑
      setIsAimEnabled(!isAimEnabled);
      showToast(
        isAimEnabled ? "功能已关闭" : "功能已开启",
        isAimEnabled ? "info" : "success"
      );
    } catch (error) {
      showToast("操作失败，请重试", "error");
    }
  };

  const handleToggleLock = async () => {
    try {
      // 这里是你的功能开启/关闭逻辑
      setIsLockEnabled(!isLockEnabled);
      showToast(
        isLockEnabled ? "功能已关闭" : "功能已开启",
        isLockEnabled ? "info" : "success"
      );
    } catch (error) {
      showToast("操作失败，请重试", "error");
    }
  };

  return (
    <AuroraBackground>
      <div className="relative w-full min-h-screen pb-8">
        {/* Dock 导航 */}
        <div className="fixed top-6 left-1/2 max-w-full -translate-x-1/2 z-50">
          <Dock 
            className="items-center py-3 px-6"
            magnification={50}
            distance={80}
          >
            {dockItems.map((item, idx) => (
              <DockItem
                key={idx}
                className="aspect-square rounded-full bg-white/90 backdrop-blur-sm hover:bg-white dark:bg-neutral-800/90 dark:hover:bg-neutral-800 cursor-pointer shadow-sm mx-1"
                onClick={() => navigate(item.link)}
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            ))}
          </Dock>
        </div>

        {/* 主要内容区域 */}
        <div className="pt-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 驱动管理卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card bg-white shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={5}
                      className="text-2xl font-bold"
                    >
                      驱动管理
                    </GradientText>
                    <p className="text-slate-600 text-sm">系统驱动管理与性能优化</p>
                  </div>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow mt-4">
                  <div className="stat">
                    <div className="stat-title text-slate-700 font-medium">驱动状态</div>
                    <div className="stat-value text-slate-900">
                      <CountUp to={100} from={0} duration={2} />%
                    </div>
                    <div className="stat-desc text-slate-600">系统兼容性</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-slate-700 font-medium">驱动版本</div>
                    <div className="stat-value text-slate-900">v2.1.0</div>
                    <div className="stat-desc text-slate-600">最新版本</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-slate-700 font-medium">兼容性</div>
                    <div className="stat-value text-slate-900">已验证</div>
                    <div className="stat-desc text-slate-600">支持当前系统</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">功能特点</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 底层系统优化，提升性能</li>
                      <li>• 自动适配系统版本</li>
                      <li>• 智能内存管理</li>
                      <li>• 实时性能监控</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">使用说明</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 首次使用需要加载驱动</li>
                      <li>• 支持自动更新检测</li>
                      <li>• 系统重启后需重新加载</li>
                      <li>• 支持一键卸载功能</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <InteractiveHoverButton 
                      text="加载驱动"
                      icon={<Upload className="h-4 w-4" />}
                      variant="default"
                      className="w-full md:w-auto"
                      onClick={handleLoadDriver}
                      disabled={isLoading}
                    />
                    <InteractiveHoverButton 
                      text="卸载驱动"
                      variant="danger"
                      className="w-full md:w-auto"
                      onClick={() => {/* 处理卸载驱动 */}}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 触摸自瞄卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card bg-white shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <MousePointer2 className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <GradientText
                      colors={["#9c40ff", "#ff40aa", "#9c40ff"]}
                      animationSpeed={5}
                      className="text-2xl font-bold"
                    >
                      触摸自瞄
                    </GradientText>
                    <p className="text-slate-600 text-sm">智能触摸辅助系统</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">功能特点</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 智能触摸响应系统</li>
                      <li>• 自动校准和补偿</li>
                      <li>• 多点触控支持</li>
                      <li>• 低延迟处理</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">参数配置</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 响应速度：极速</li>
                      <li>• 触控精度：极高</li>
                      <li>• 目标优先级：自动</li>
                      <li>• 操作模式：智能</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <InteractiveHoverButton 
                    text={isAimEnabled ? "关闭功能" : "开启功能"}
                    variant={isAimEnabled ? "danger" : "success"}
                    className="w-full"
                    onClick={handleToggleAim}
                  />
                </div>
              </div>
            </motion.div>

            {/* 追锁功能卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card bg-white shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Crosshair className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <GradientText
                      colors={["#40ffaa", "#40aaff", "#40ffaa"]}
                      animationSpeed={5}
                      className="text-2xl font-bold"
                    >
                      追锁功能
                    </GradientText>
                    <p className="text-slate-600 text-sm">高精度目标追踪系统</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">功能特点</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 高精度目标追踪</li>
                      <li>• 智能预测系统</li>
                      <li>• 自动目标识别</li>
                      <li>• 实时位置计算</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-slate-800 font-semibold mb-2">高级设置</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• 追踪FOV：0-180°</li>
                      <li>• 预判精度：极高</li>
                      <li>• 反应速度：2ms</li>
                      <li>• 识别范围：全局</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <InteractiveHoverButton 
                    text={isLockEnabled ? "关闭功能" : "开启功能"}
                    variant={isLockEnabled ? "danger" : "success"}
                    className="w-full"
                    onClick={handleToggleLock}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 添加弹窗 */}
      <MockupCodeDialog
        logs={driverLogs}
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setDriverLogs([]);
        }}
      />

      {/* 添加 Notification 组件 */}
      <Notification
        title={isAimEnabled ? "功能已开启" : "功能已关闭"}
        message={isAimEnabled ? "触摸自瞄功能已成功开启" : "触摸自瞄功能已成功关闭"}
        type={isAimEnabled ? "success" : "info"}
        isOpen={toast.isOpen}
        onClose={() => setToast(prev => ({ ...prev, isOpen: false }))}
      />
    </AuroraBackground>
  );
};

export default Features; 