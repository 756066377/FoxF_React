"use client";
import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { HomeIcon, Cpu, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 使用 useMemo 缓存 dockItems
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

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 简化动画配置
  const cardVariants = {
    initial: { 
      opacity: 0,
      y: 10 
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // 使用 React.memo 优化卡片渲染
  const InfoCard = useCallback(({ title, children }: any) => (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="card bg-white/90 backdrop-blur-sm shadow-xl transform-gpu"
      layoutId={`card-${title}`}
    >
      <div className="card-body">
        <h2 className="!text-neutral-950 text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </motion.div>
  ), []);

  // 使用 useMemo 缓存卡片内容
  const cards = useMemo(() => (
    <div className="max-w-4xl mx-auto space-y-6">
      <InfoCard title="设备信息">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title text-slate-700 font-medium">处理器</div>
            <div className="stat-value text-slate-900">骁龙8 Gen2</div>
            <div className="stat-desc text-slate-600">SM8550</div>
          </div>
          <div className="stat">
            <div className="stat-title text-slate-700 font-medium">内存</div>
            <div className="stat-value text-slate-900">16GB</div>
            <div className="stat-desc text-slate-600">LPDDR5X</div>
          </div>
          <div className="stat">
            <div className="stat-title text-slate-700 font-medium">系统</div>
            <div className="stat-value text-slate-900">Android 14</div>
            <div className="stat-desc text-slate-600">API 34</div>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="系统信息">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              <tr>
                <td className="font-bold text-slate-800">设备型号</td>
                <td className="text-slate-700">小米14 Pro</td>
              </tr>
              <tr>
                <td className="font-bold text-slate-800">系统版本</td>
                <td className="text-slate-700">HyperOS 1.0</td>
              </tr>
              <tr>
                <td className="font-bold text-slate-800">内核版本</td>
                <td className="text-slate-700">5.15.78</td>
              </tr>
            </tbody>
          </table>
        </div>
      </InfoCard>

      <InfoCard title="性能监控">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm mb-2 text-slate-700 font-medium">CPU 温度</div>
            <progress className="progress progress-primary w-full" value="45" max="100"></progress>
          </div>
          <div>
            <div className="text-sm mb-2 text-slate-700 font-medium">内存占用</div>
            <progress className="progress progress-secondary w-full" value="65" max="100"></progress>
          </div>
          <div>
            <div className="text-sm mb-2 text-slate-700 font-medium">电池温度</div>
            <progress className="progress progress-accent w-full" value="38" max="100"></progress>
          </div>
          <div>
            <div className="text-sm mb-2 text-slate-700 font-medium">电池电量</div>
            <progress className="progress progress-info w-full" value="85" max="100"></progress>
          </div>
        </div>
      </InfoCard>
    </div>
  ), [InfoCard]);

  return (
    <AuroraBackground>
      <div className="relative w-full min-h-screen">
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

        <div className="pt-24 px-4 md:px-6 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {cards}
          </AnimatePresence>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default React.memo(Home); 