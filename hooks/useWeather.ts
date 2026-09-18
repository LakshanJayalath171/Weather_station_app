import { useEffect, useState } from "react";
import { getWeatherData } from "../services/weatherApi";

export function useWeather(latitude: number, longitude: number) {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchWeatherData() {
    if (latitude === null || longitude === null) {
      setErrorMsg("Invalid latitude or longitude");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);

      const data = await getWeatherData(latitude, longitude);

      setWeatherData(data);
    } catch (error) {
      console.log(error);
      setErrorMsg("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, [latitude, longitude]);

  return { weatherData, errorMsg, loading, fetchWeatherData };
}
