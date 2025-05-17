
import React, { useState } from "react";
import { toast } from "sonner";
import { WeatherLayout } from "./WeatherLayout";
import { WeatherHeader } from "./WeatherHeader";
import { SearchBox } from "./SearchBox";
import { WeatherCard } from "./WeatherCard";
import { WeatherLoading } from "./WeatherLoading";
import { WeatherError } from "./WeatherError";
import { getWeatherData } from "@/services/weatherService";
import { WeatherData } from "@/types/weather";

const DEFAULT_WEATHER: WeatherData = {
  city: "Delhi",
  feels_like: 32.35,
  humidity: 32,
  temp: 33.04,
  tempMax: 33.04,
  tempMin: 33.04,
  weather: "clear sky",
};

export function WeatherApp() {
  const [weatherData, setWeatherData] = useState<WeatherData>(DEFAULT_WEATHER);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchedCity, setLastSearchedCity] = useState<string>("Delhi");

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLastSearchedCity(city);
      toast.success(`Weather updated for ${data.city}`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch weather data";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const retryLastSearch = () => {
    handleSearch(lastSearchedCity);
  };

  return (
    <WeatherLayout>
      <WeatherHeader />
      
      <SearchBox onSearch={handleSearch} isLoading={isLoading} />
      
      {isLoading ? (
        <WeatherLoading />
      ) : error ? (
        <WeatherError message={error} onRetry={retryLastSearch} />
      ) : (
        <WeatherCard data={weatherData} />
      )}
    </WeatherLayout>
  );
}

export default WeatherApp;
