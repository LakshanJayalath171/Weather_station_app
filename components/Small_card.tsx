import { CloudRainWind, CloudSun, Sun } from "lucide-react-native";
import { Text, View } from "react-native";
interface SmallCardProps {
  icon: string;
  title: string;
  temperature: string;
  unit: string;
}
const Small_card = ({ icon, title, temperature, unit }) => {
  return (
    <View className="w-24 h-36 glass-bg rounded-2xl items-center justify-center flex gap-3">
      <Text className="text-white text-lg font-bold">{title}</Text>
      {icon === "sunny" && <Sun color="#F59E0B" size={40} />}
      {icon === "cloudy" && <CloudSun color="#94A3B8" size={40} />}
      {icon === "rainy" && <CloudRainWind color="#38BDF8" size={40} />}
      <Text className="text-white text-sm font-semibold">
        {temperature} {unit}
      </Text>
    </View>
  );
};

export default Small_card;
