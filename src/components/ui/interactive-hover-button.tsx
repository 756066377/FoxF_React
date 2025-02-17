import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  variant?: "default" | "danger" | "success" | "warning";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", icon, className, variant = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border p-3 text-center font-medium",
        "min-w-[8rem] h-11 transition-all duration-300",
        variant === "default" && "border-blue-500/20 hover:border-blue-500/40 text-blue-600",
        variant === "danger" && "border-red-500/20 hover:border-red-500/40 text-red-600",
        variant === "success" && "border-green-500/20 hover:border-green-500/40 text-green-600",
        variant === "warning" && "border-yellow-500/20 hover:border-yellow-500/40 text-yellow-600",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        {icon || <ArrowRight className="h-4 w-4" />}
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300",
        "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
        variant === "default" && "bg-blue-500/10 group-hover:bg-blue-500/20",
        variant === "danger" && "bg-red-500/10 group-hover:bg-red-500/20",
        variant === "success" && "bg-green-500/10 group-hover:bg-green-500/20",
        variant === "warning" && "bg-yellow-500/10 group-hover:bg-yellow-500/20",
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton }; 