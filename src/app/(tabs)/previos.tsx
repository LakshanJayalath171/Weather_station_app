import {
  CalendarDays,
  ChartSpline,
  Clock,
  Droplet,
  Droplets,
  Eye,
  Navigation,
  Sun,
  Wind,
  WindArrowDown,
} from "lucide-react-native";

import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Days_card from "../../../components/Days_card";
import ProgressBar from "../../../components/Progress";
import Small_card from "../../../components/Small_card";
import Weather_loading from "../../../components/Weather_loading";
import { useLocation } from "../../../hooks/useLocation";
import { useWeather } from "../../../hooks/useWeather";

const previos = () => {
  const [placeName, setPlaceName] = useState<any | null>(null);
  const { location, errorMsg, loading, getLocation } = useLocation();
  const {
    weatherData,
    errorMsg: error,
    loading: weatherLoading,
    fetchWeatherData,
  } = useWeather(location?.latitude || 0, location?.longitude || 0);

  useEffect(() => {
    const getPlaceName = async () => {
      if (location) {
        try {
          const place = await Location.reverseGeocodeAsync({
            latitude: location.latitude,
            longitude: location.longitude,
          });

          if (place && place.length > 0) {
            setPlaceName(place[0] || "Unknown Location");
          }
        } catch (error) {
          console.log("Error getting place name:", error);
        }
      }
    };

    getPlaceName();
  }, [location?.latitude, location?.longitude]);

  if (loading || weatherLoading) {
    return <Weather_loading />;
  }

  if (errorMsg || error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{errorMsg || error}</Text>
        <Button
          title="Retry"
          onPress={() => {
            getLocation();
            fetchWeatherData();
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView className="px-4">
      <View className="flex flex-row items-center justify-start glass-bg px-3 py-2 gap-4">
        <View className="flex items-center justify-center">
          <TouchableOpacity className="p-2 rounded-full glass-bg flex items-center justify-center">
            <Navigation color="#94A3B8" size={20} />
          </TouchableOpacity>
        </View>

        <View>
          <View className="flex flex-row items-center gap-2">
            <View className="bg-purple-500/30 px-4 py-1 rounded-full">
              <Text className="text-white text-xs">Exact Location</Text>
            </View>
          </View>

          <Text className="text-white text-2xl font-semibold">
            {placeName?.city || "Unknown Location"}
          </Text>

          <Text className="text-xs text-white/80 font-light">
            {placeName?.region}, {placeName?.country}
          </Text>
        </View>
      </View>

      {/* today forecast */}
      <View className="mt-3">
        <View className="flex items-center justify-between flex-row gap-2">
          <View className="flex flex-row items-center gap-2">
            <Clock color={"white"} size={15} />
            <Text className="text-white text-lg font-semibold">
              Hourly Forecast
            </Text>
          </View>
          <Text className="text-purple-500">Local Time</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 3, paddingVertical: 8 }}
        >
          {weatherData?.hourly?.time
            ?.slice(0, 24)
            .map((time: string, index: number) => (
              <Small_card
                key={index}
                title={new Date(time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                temperature={weatherData?.hourly?.temperature_2m?.[index]}
                weather_code={weatherData?.hourly?.weathercode?.[index]}
                unit={weatherData?.hourly_units?.temperature_2m}
              />
            ))}
        </ScrollView>
      </View>

      {/* atmospheric conditions */}
      <View className="mt-3">
        <View className="flex flex-row items-center gap-2">
          <ChartSpline color={"white"} size={15} />
          <Text className="text-white/70 text-lg font-semibold">
            Atmospheric Conditions
          </Text>
        </View>

        {/* humidity and wind speed */}

        <View className="flex flex-row gap-1 mt-2 ">
          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">Humidity</Text>
              <Droplet color={"#38BDF8"} size={20} />
            </View>

            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.relative_humidity_2m}{" "}
                {weatherData?.current_units?.relative_humidity_2m}
              </Text>
              <ProgressBar progress={28} />
              <Text className="text-blue-500/50 text-sm mt-1">
                Ideal moisture index
              </Text>
            </View>
          </View>

          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">Wind Speed</Text>
              <Wind color={"#94A3B8"} size={20} />
            </View>
            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.wind_speed_10m}{" "}
                {weatherData?.current_units?.wind_speed_10m}
              </Text>
              <Text className="text-white text-sm">Breeze from NE</Text>
            </View>
          </View>
        </View>

        {/* precipitation and UV index */}
        <View className="flex flex-row gap-1 mt-2 ">
          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">
                Precipitation
              </Text>
              <Droplets color={"#38BDF8"} size={20} />
            </View>

            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.precipitation}{" "}
                {weatherData?.current_units?.precipitation}
              </Text>
            </View>
          </View>

          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">UV Index</Text>
              <Sun color={"#F59E0B"} size={20} />
            </View>
            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.uv_index}{" "}
                {weatherData?.current_units?.uv_index}
              </Text>
              <Text className="text-white text-sm">Breeze from NE</Text>
            </View>
          </View>
        </View>

        {/* pressure and visibility */}
        <View className="flex flex-row gap-1 mt-2 ">
          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">Presure</Text>
              <WindArrowDown color={"#94A3B8"} size={20} />
            </View>

            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.surface_pressure}{" "}
                {weatherData?.current_units?.surface_pressure}
              </Text>
              <Text className="text-white/50 text-sm mt-1">
                Stable hill terrain
              </Text>
            </View>
          </View>

          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">Visibility</Text>
              <Eye color={"#38BDF8"} size={20} />
            </View>
            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">
                {weatherData?.current?.visibility / 1000} Km
              </Text>
              <Text className="text-white text-sm">Clear horizon</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 7 days report*/}

      <View className="mt-3">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <CalendarDays color={"white"} size={15} />
            <Text className="text-white/80 text-lg font-semibold">
              7-Day Outlook
            </Text>
          </View>
          <Text className="text-purple-500">Next Days</Text>
        </View>

        <View className="mb-3">
          <Days_card day="Monday" weather="sunny" max={36} min={25} />
          <Days_card
            day="Tuesday"
            weather="Heavy rain/Thunderstorms"
            max={36}
            min={25}
          />
          <Days_card day="Wednesday" weather="Hurricane" max={36} min={25} />
          <Days_card day="Thursday" weather="Cyclone" max={25} min={19} />
          <Days_card day="Friday" weather="Snow flakes" max={0} min={-10} />
        </View>
      </View>
    </ScrollView>
  );
};

export default previos;
