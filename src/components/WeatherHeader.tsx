
import React from "react";
import { Cloud } from "lucide-react";

interface WeatherHeaderProps {
  title?: string;
}

export function WeatherHeader({ title = "Weather Dashboard" }: WeatherHeaderProps) {
  return (
    <div className="flex items-center justify-center mb-8 mt-4">
      <Cloud className="h-8 w-8 text-primary mr-2" />
      <h1 className="text-3xl font-bold text-center text-gray-800">{title}</h1>
    </div>
  );
}
