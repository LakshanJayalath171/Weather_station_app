import {
  ArrowLeftRight,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";
import { weatherStates } from "../assets";

interface DaysCardProps {
  day: string;
  max: number;
  min: number;
  weather_code: number;
}

const Days_card = ({ day, weather_code, max, min }: DaysCardProps) => {
  const weather = (weather_code: number) => {
    return weatherStates.find((state) => state.codes.includes(weather_code));
  };

  return (
    <View className="w-full mt-2">
      <View className="flex glass-bg px-3 py-2">
        {/* icon */}
        <View className="flex flex-row items-center justify-start ">
          <View className="flex-1 w-16 h-16 items-center justify-center1">
            <Image
              source={weather(weather_code)?.image}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>

          <View className="flex-1">
            <Text className="text-3xl font-bold text-white/80">
              {new Date(day).toLocaleDateString("en-US", { weekday: "long" })}
            </Text>
            <Text className="text-sm font-light text-white/80">
              "2026-09-22",
            </Text>
            <Text className="text-lg font-medium text-white/80">
              {weather(weather_code)?.name}
            </Text>

            <View className="flex flex-row items-center justify-start gap-5 mt-2">
              <View>
                <ThermometerSnowflake color={"#38BDF8"} />
                <Text className="text-white/80 text-sm">{min}°C</Text>
              </View>
              <View>
                <ArrowLeftRight color={"white"} size={20} />
              </View>
              <View>
                <ThermometerSun color={"#FBBF24"} />
                <Text className="text-white/80 text-sm">{max}°C</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Days_card;
