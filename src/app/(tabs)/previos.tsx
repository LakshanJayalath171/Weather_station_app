import {
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
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../../../components/Progress";
import Small_card from "../../../components/Small_card";

const previos = () => {
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

          <Text className="text-lg text-white font-bold">
            Western Province, Sri Lanka
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
          <Small_card icon={"sunny"} title="12:00 PM" temperature={"28°C"} />
          <Small_card icon={"sunny"} title="1:00 PM" temperature={"29°C"} />
          <Small_card icon={"rainy"} title="2:00 PM" temperature={"30°C"} />
          <Small_card icon={"cloudy"} title="3:00 PM" temperature={"31°C"} />
          <Small_card icon={"cloudy"} title="4:00 PM" temperature={"32°C"} />
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
              <Text className="text-white text-2xl font-bold">28%</Text>
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
              <Text className="text-white text-2xl font-bold">15 km/h</Text>
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
              <Text className="text-white text-2xl font-bold">20%</Text>
              <ProgressBar progress={20} />
              <Text className="text-blue-500/50 text-sm mt-1">
                Mist around 4 PM
              </Text>
            </View>
          </View>

          <View className="flex-1 glass-bg rounded-lg px-3 py-2 w-full">
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-white text-sm font-bold">UV Index</Text>
              <Sun color={"#F59E0B"} size={20} />
            </View>
            <View className="mt-3">
              <Text className="text-white text-2xl font-bold">3 Low</Text>
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
              <Text className="text-white text-2xl font-bold">1014 hPa</Text>
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
              <Text className="text-white text-2xl font-bold">10 km</Text>
              <Text className="text-white text-sm">Clear horizon</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default previos;
