
import { WeatherData } from "@/types/weather";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8ae470ed28c4bc7ebb092f651723a832"; // Note: In a real app, use environment variables

export async function getWeatherData(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please check the spelling and try again.");
      }
      throw new Error("Failed to fetch weather data. Please try again later.");
    }
    
    const data = await response.json();
    
    return {
      city: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      weather: data.weather[0].description,
      icon: data.weather[0].icon,
      country: data.sys.country,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Something went wrong. Please try again.");
  }
}
