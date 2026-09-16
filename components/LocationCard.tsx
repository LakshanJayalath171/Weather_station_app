import { CloudRainWind, CloudSun, Droplets, Sun } from "lucide-react-native";
import { Text, View } from "react-native";

interface LocationCardProps {
  location: string;
  temperature: number;
  low: number;
  high: number;
  humidity: number;
  icon: "sunny" | "cloudy" | "rainy";
}

const LocationCard = ({
  location,
  temperature,
  low,
  high,
  humidity,
  icon,
}: LocationCardProps) => {
  return (
    <View className="glass-bg px-4 py-3 rounded-2xl flex flex-row items-center justify-between gap-3 mt-2">
      <View className="flex items-center justify-center rounded-2xl p-2 glass-card">
        {icon === "sunny" && <Sun color="#F59E0B" size={40} />}
        {icon === "cloudy" && <CloudSun color="#94A3B8" size={40} />}
        {icon === "rainy" && <CloudRainWind color="#4FA3FF" size={40} />}
      </View>

      <View>
        <Text className="text-white font-bold text-2xl">{location}</Text>
        <Text className="text-white/50 font-light">
          Central Province • Cloudy
        </Text>
        <View className="flex flex-row items-center gap-2">
          <Droplets color="white" size={15} />
          <Text className="text-white">Humidity: {humidity}%</Text>
        </View>
      </View>

      <View>
        <Text className="text-white font-bold text-2xl">{temperature}°</Text>
        <Text className="text-white/50 font-light text-sm">L: {low}°</Text>
        <Text className="text-white/50 font-light text-sm">H: {high}°</Text>
      </View>
    </View>
  );
};

export default LocationCard;
