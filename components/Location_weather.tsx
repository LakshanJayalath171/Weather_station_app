import {
  Bubbles,
  ChevronRight,
  Droplets,
  LocateFixed,
  Wind,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";
import { weatherStates } from "../assets";

interface LocationWeatherProps {
  city: string;
  region: string;
  time: string;
  weather_code: number;
  temp: number;
  temp_unit: string;
  wind_Speed: number;
  wind_speed_unit: string;
  humidity: number;
  precipitaion: number;
  humidity_unit: string;
  precipitaion_unit: string;
}

const Location_weather = ({
  city,
  region,
  time,
  weather_code,
  temp,
  temp_unit,
  wind_Speed,
  wind_speed_unit,
  humidity,
  humidity_unit,
  precipitaion,
  precipitaion_unit,
}: LocationWeatherProps) => {
  const weather = (weather_code: number) => {
    return weatherStates.find((state) => state.codes.includes(weather_code));
  };

  return (
    <View className="glass-bg mt-2 pb-4">
      {/* location details */}
      <View className=" rounded-2xl px-5 py-3 flex flex-row items-center justify-between p-3 mt-1">
        <View className="flex flex-row items-center gap-3">
          <View className="p-3 rounded-full glass-bg">
            <LocateFixed color="#94A3B8" size={20} />
          </View>

          <View className="flex-1">
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="px-2 py-1 rounded-full bg-purple-600/30">
                <Text className="text-white font-light text-xs">
                  Exact Location
                </Text>
              </View>
            </View>
            <Text className="text-lg text-white ">
              {city}, {region}
            </Text>
            <Text className="text-xs text-white/40">
              {new Date().toLocaleDateString(time)} •{" "}
              {weather(weather_code)?.name}
            </Text>
          </View>

          <View className="flex flex-row items-center gap-1">
            <Text className="text-rain font-light text-sm">Active</Text>
            <ChevronRight color="#94A3B8" size={20} />
          </View>
        </View>
      </View>

      {/* weather details */}

      <View className="flex items-center justify-center">
        <View>
          <Image source={weather(weather_code)?.image} />
        </View>

        <View className="flex items-center justify-center gap-1 mt-2">
          <Text className="text-white font-bold text-6xl">
            {temp} <Text className="text-white/40 text-2xl">{temp_unit}</Text>
          </Text>
          <Text className="text-white/90 text-lg">
            Feels like 27° • High 28° / Low 21°
          </Text>
          <Text className="text-white/90 text-xs">
            AQI <Text className="text-rain">28</Text> • Excellent
          </Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-between px-10 py-4">
        <View className="flex flex-row items-center gap-2 mt-3 ">
          <View className="flex  items-center">
            <Wind color="#94A3B8" size={30} />
            <Text className="text-white/90 text-2xl font-bold">
              {wind_Speed} {wind_speed_unit}
            </Text>
            <Text className="text-white/90 text-xs">Wind Speed</Text>
          </View>
        </View>
        <View>
          <View className="flex  items-center">
            <Bubbles color="#94A3B8" size={30} />
            <Text className="text-white/90 text-2xl font-bold">
              {humidity} {humidity_unit}
            </Text>
            <Text className="text-white/90 text-xs">Humidity</Text>
          </View>
        </View>
        <View>
          <View className="flex  items-center">
            <Droplets color="#94A3B8" size={30} />
            <Text className="text-white/90 text-2xl font-bold">
              {precipitaion} {precipitaion_unit}
            </Text>
            <Text className="text-white/90 text-xs">Precipitation</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Location_weather;
