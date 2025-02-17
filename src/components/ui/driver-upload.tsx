"use client";
import React, { useState } from 'react';
import { Upload, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface DriverUploadProps {
  onUpload: () => void;
}

export const DriverUpload: React.FC<DriverUploadProps> = ({ onUpload }) => {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setStatus('uploading');
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('success');
          onUpload();
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const resetUpload = () => {
    setStatus('idle');
    setProgress(0);
  };

  return (
    <div className="w-full">
      {status === 'idle' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClick}
          className="btn btn-primary no-animation w-full gap-2"
        >
          <Upload className="w-5 h-5" />
          刷入驱动
        </motion.button>
      )}

      {status === 'uploading' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card-body items-center py-6">
            <RefreshCw className="w-10 h-10 text-primary animate-spin" />
            <p className="text-sm font-medium text-primary">正在刷入驱动...</p>
            <progress 
              className="progress progress-primary w-full max-w-xs" 
              value={progress} 
              max="100"
            />
          </div>
        </motion.div>
      )}

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card-body items-center py-6">
            <div className="avatar placeholder">
              <div className="bg-success text-success-content rounded-full w-12">
                <Check className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm font-medium text-success">驱动刷入成功</p>
            <button
              onClick={resetUpload}
              className="btn btn-ghost btn-sm gap-2 text-success"
            >
              <RefreshCw className="w-4 h-4" />
              重新刷入
            </button>
          </div>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card-body items-center py-6">
            <div className="avatar placeholder">
              <div className="bg-error text-error-content rounded-full w-12">
                <AlertCircle className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm font-medium text-error">刷入失败，请重试</p>
            <button
              onClick={resetUpload}
              className="btn btn-ghost btn-sm gap-2 text-error"
            >
              <RefreshCw className="w-4 h-4" />
              重新尝试
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}; 