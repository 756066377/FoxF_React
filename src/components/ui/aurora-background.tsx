"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-white dark:bg-black">
      <div className="fixed inset-0 w-full h-full bg-white dark:bg-black">
        <div className="absolute h-full w-full z-0 opacity-30">
          <div className="absolute top-0 w-full h-1/2 z-0 bg-gradient-to-br from-blue-500 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 w-full h-1/2 z-0 bg-gradient-to-tr from-indigo-500 via-transparent to-transparent"></div>
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}; 