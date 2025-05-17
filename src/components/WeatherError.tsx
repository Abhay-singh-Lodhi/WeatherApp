
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface WeatherErrorProps {
  message: string;
  onRetry: () => void;
}

export function WeatherError({ message, onRetry }: WeatherErrorProps) {
  return (
    <Card className="bg-white/90 shadow-md w-full max-w-lg mx-auto">
      <CardContent className="pt-6 flex flex-col items-center">
        <Info className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Unable to Get Weather</h3>
        <p className="text-gray-600 mb-6 text-center">{message}</p>
        <Button onClick={onRetry} variant="outline" className="w-full max-w-xs">
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
}
