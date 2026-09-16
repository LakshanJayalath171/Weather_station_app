import {
    Bubbles,
    ChevronRight,
    Droplets,
    LocateFixed,
    Wind,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";

const Location_weather = () => {
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
              Colombo, Western Province
            </Text>
            <Text className="text-xs text-white/40">
              Thursday • 11:45 AM • Overcast
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
          <Image source={require("../assets/State images/hurricane.png")} />
        </View>

        <View className="flex items-center justify-center gap-1 mt-2">
          <Text className="text-white font-bold text-6xl">
            28 <Text className="text-white/40 text-2xl">°C</Text>
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
            <Text className="text-white/90 text-2xl font-bold">15 km/h</Text>
            <Text className="text-white/90 text-xs">Wind Speed</Text>
          </View>
        </View>
        <View>
          <View className="flex  items-center">
            <Bubbles color="#94A3B8" size={30} />
            <Text className="text-white/90 text-2xl font-bold">78%</Text>
            <Text className="text-white/90 text-xs">Humidity</Text>
          </View>
        </View>
        <View>
          <View className="flex  items-center">
            <Droplets color="#94A3B8" size={30} />
            <Text className="text-white/90 text-2xl font-bold">0.2 mm</Text>
            <Text className="text-white/90 text-xs">Precipitation</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Location_weather;
