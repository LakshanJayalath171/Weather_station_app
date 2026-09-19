import { Image, Text, View } from "react-native";
import { weatherStates } from "../assets";
interface SmallCardProps {
  icon: string;
  title: string;
  temperature: string;
  unit: string;
  weather_code: number;
}
const Small_card = ({ icon, title, temperature, unit, weather_code }) => {
  const weather = (weather_code: number) => {
    return weatherStates.find((state) => state.codes.includes(weather_code));
  };

  return (
    <View className="w-24 h-36 glass-bg rounded-2xl items-center justify-center flex gap-3">
      <Text className="text-white text-lg font-bold">{title}</Text>
      <View className="">
        <Image source={weather(weather_code)?.image} className="w-16 h-10" />
      </View>
      <Text className="text-white text-sm font-semibold">
        {temperature} {unit}
      </Text>
    </View>
  );
};

export default Small_card;
