const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherData(latitude: number, longitude: number) {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    hourly:
      "temperature_2m,relativehumidity_2m,precipitation_probability,weathercode",
    daily:
      "temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode",
    timezone: "auto",
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    forecast_days: "7",
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  } else {
    return response.json();
  }
}
