import {
  ArrowLeftRight,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";

interface DaysCardProps {
  day: string;
  weather: string;
  max: number;
  min: number;
}

const Days_card = ({ day, weather, max, min }: DaysCardProps) => {
  return (
    <View className="w-full mt-2">
      <View className="flex glass-bg px-3 py-2">
        {/* icon */}
        <View className="flex flex-row items-center justify-start ">
          <View className="flex-1">
            <Image
              source={require("../assets/State images/lightning.png")}
              className="w-28 h-28"
            />
          </View>

          <View className="flex-1">
            <Text className="text-3xl font-bold text-white/80">{day}</Text>
            <Text className="text-lg font-medium text-white/80">{weather}</Text>

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
