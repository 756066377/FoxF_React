"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Globe } from '@/components/ui/globe';

const Launch: React.FC = () => {
  const navigate = useNavigate();
  
  console.log('Launch component rendered');

  return (
    <AuroraBackground>
      <div className="relative w-full h-full overflow-hidden">
        <Globe className="opacity-50" />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col gap-4 items-center justify-center min-h-screen px-4"
        >
          <div className="text-8xl font-bold text-slate-900 text-center tracking-wider">
            FoxF
          </div>
          <div className="text-2xl font-medium text-slate-600 py-4 text-center max-w-2xl">
            专业的三角洲行动游戏辅助工具，为您提供极致的游戏体验
          </div>
          <button 
            onClick={() => navigate('/home')}
            className="bg-slate-900 rounded-full text-white px-12 py-4 text-2xl font-medium hover:scale-105 transition-transform"
          >
            开始使用
          </button>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Launch; 