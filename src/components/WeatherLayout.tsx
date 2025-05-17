
import React from "react";
import { cn } from "@/lib/utils";

interface WeatherLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export function WeatherLayout({ className, children }: WeatherLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col items-center",
      className
    )}>
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}
