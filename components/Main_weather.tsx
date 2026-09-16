import { Image, Text, View } from "react-native";

const Main_weather = () => {
  return (
    <View className="flex items-center justify-center glass-bg pb-10 ">
      <View className="flex items-center justify-center pt-10">
        <Image
          source={require("../assets/State images/cloudy_overcast.png")}
          className=""
        />
      </View>

      <View>
        <Text className="text-white/70 text-6xl font-bold text-center mt-3">
          26 <Text className="text-white/40 text-rain text-3xl">°C</Text>
        </Text>
        <Text className="text-white/70 text-2xl font-bold text-center mt-1">
          Cloudy
        </Text>

        <View className="bg-purple-500/20 rounded-full px-4 py-1 flex-row gap-2 items-center justify-center mt-2">
          <Text className="text-white/70 text-sm font-bold">
            Feels like 33 °C
          </Text>
          <Text className="text-purple-400">H: 31°</Text>
          <Text className="text-gray-400">L: 22°</Text>
        </View>
      </View>
    </View>
  );
};

export default Main_weather;
