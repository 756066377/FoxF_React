import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MockupCodeDialogProps {
  logs: Array<{
    text: string;
    prefix?: string;
    className?: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function MockupCodeDialog({ logs, isOpen, onClose, className }: MockupCodeDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* 弹窗内容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              "relative w-[90vw] max-w-2xl m-4",
              className
            )}
          >
            <div className="relative bg-slate-950/95 rounded-xl overflow-hidden shadow-2xl">
              {/* 标题栏 */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h3 className="text-white/90 font-medium">驱动加载日志</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="h-4 w-4 text-white/70" />
                </button>
              </div>

              {/* 终端窗口 */}
              <div className="mockup-code bg-transparent text-slate-100 max-h-[60vh] overflow-auto">
                {logs.map((log, index) => (
                  <pre 
                    key={index} 
                    data-prefix={log.prefix || ">"} 
                    className={cn(
                      "animate-fade-in",
                      "border-b border-white/5 last:border-0",
                      log.className
                    )}
                  >
                    <code>{log.text}</code>
                  </pre>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 