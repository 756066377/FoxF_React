import { cn } from "@/lib/utils";
import { Check, X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
}

export function Notification({ title, message, type = "info", isOpen, onClose }: NotificationProps) {
  const icons = {
    success: <Check className="h-5 w-5 text-emerald-500" />,
    error: <X className="h-5 w-5 text-red-500" />,
    info: <AlertCircle className="h-5 w-5 text-blue-500" />
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                  type === "success" && "bg-emerald-50 dark:bg-emerald-950/50",
                  type === "error" && "bg-red-50 dark:bg-red-950/50",
                  type === "info" && "bg-blue-50 dark:bg-blue-950/50"
                )}>
                  {icons[type]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {title}
                      </p>
                      <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {message}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg flex items-center justify-center h-8 w-8 p-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 