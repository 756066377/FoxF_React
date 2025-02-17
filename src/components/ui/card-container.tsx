import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <div className={cn(
      "relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl",
      className
    )}>
      {/* 装饰性光晕效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-2xl" />
      
      {/* 内容区域 */}
      <div className="relative z-10 space-y-6">
        {children}
      </div>

      {/* 装饰性光点 */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full blur-xl opacity-50" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-purple-500 rounded-full blur-xl opacity-50" />
    </div>
  );
}; 