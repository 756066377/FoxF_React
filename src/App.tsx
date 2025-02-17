import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/ui/page-transition";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Launch from "@/pages/Launch";
import { useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';

function App() {
  const location = useLocation();

  useEffect(() => {
    // 获取状态栏高度并设置 padding
    const init = async () => {
      const platform = await invoke<string>('get_platform');
      if (platform === 'android') {
        // 在 Android 上，我们可以通过其他方式获取状态栏高度
        const statusBarHeight = await invoke<number>('get_status_bar_height') || 0;
        document.body.style.paddingTop = `${statusBarHeight}px`;
      }
    };
    init();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Launch />
            </PageTransition>
          } 
        />
        <Route 
          path="/home" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/features" 
          element={
            <PageTransition>
              <Features />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App; 