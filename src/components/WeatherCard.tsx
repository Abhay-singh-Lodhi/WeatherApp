
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Thermometer } from "lucide-react";
import { WeatherData } from "@/types/weather";
import { cn } from "@/lib/utils";

interface WeatherCardProps {
  data: WeatherData;
  className?: string;
}

export function WeatherCard({ data, className }: WeatherCardProps) {
  const getWeatherIcon = (weather: string) => {
    const lowerCaseWeather = weather.toLowerCase();
    if (lowerCaseWeather.includes("clear")) return <Sun className="h-16 w-16 text-yellow-500" />;
    if (lowerCaseWeather.includes("cloud")) return <Cloud className="h-16 w-16 text-gray-500" />;
    if (lowerCaseWeather.includes("rain")) return <CloudRain className="h-16 w-16 text-blue-600" />;
    if (lowerCaseWeather.includes("snow")) return <CloudSnow className="h-16 w-16 text-blue-300" />;
    if (lowerCaseWeather.includes("thunder")) return <CloudLightning className="h-16 w-16 text-purple-700" />;
    return <Thermometer className="h-16 w-16 text-orange-500" />;
  };

  const getWeatherBg = (weather: string) => {
    const lowerCaseWeather = weather.toLowerCase();
    if (lowerCaseWeather.includes("clear")) return "from-blue-400 to-blue-600";
    if (lowerCaseWeather.includes("cloud")) return "from-gray-400 to-gray-600";
    if (lowerCaseWeather.includes("rain")) return "from-blue-700 to-blue-900";
    if (lowerCaseWeather.includes("snow")) return "from-blue-200 to-blue-400";
    if (lowerCaseWeather.includes("thunder")) return "from-purple-700 to-gray-900";
    return "from-blue-500 to-blue-700";
  };

  return (
    <Card className={cn("overflow-hidden shadow-lg animate-fade-in glass-card", className)}>
      <div className={cn("bg-gradient-to-br text-white p-8", getWeatherBg(data.weather))}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">{data.city}</h2>
            <p className="text-lg capitalize">{data.weather}</p>
          </div>
          {getWeatherIcon(data.weather)}
        </div>
        <div className="mt-6">
          <span className="text-6xl font-semibold">{Math.round(data.temp)}°C</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <WeatherDetail label="Feels Like" value={`${Math.round(data.feels_like)}°C`} />
          <WeatherDetail label="Humidity" value={`${data.humidity}%`} />
          <WeatherDetail label="Min Temp" value={`${Math.round(data.tempMin)}°C`} />
          <WeatherDetail label="Max Temp" value={`${Math.round(data.tempMax)}°C`} />
        </div>
      </CardContent>
    </Card>
  );
}

function WeatherDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-medium">{value}</p>
    </div>
  );
}
