
export interface WeatherData {
  city: string;
  temp: number;
  feels_like: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  weather: string;
  icon?: string;
  country?: string;
  windSpeed?: number;
  pressure?: number;
  sunrise?: number;
  sunset?: number;
}
