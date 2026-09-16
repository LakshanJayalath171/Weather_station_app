import {
  ArrowRight,
  Bubbles,
  CloudHail,
  EllipsisVertical,
  Grid2x2,
  Navigation,
  Wind,
} from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import LocationCard from "../../../components/LocationCard";
import Main_weather from "../../../components/Main_weather";
import Small_card from "../../../components/Small_card";
const index = () => {
  return (
    <ScrollView className="px-3">
      {/* Header and icon */}
      <View className="flex flex-row items-center justify-between ">
        <View className="p-3 rounded-full glass-bg ">
          <EllipsisVertical color="white" />
        </View>
        <View>
          <View className="flex-row gap-3 items-center justify-center">
            <Navigation color="white" />
            <Text className="text-2xl font-bold text-white/90">New York</Text>
          </View>

          <Text className="text-white/50">Monday, October 1st</Text>
        </View>

        <View className="p-3 rounded-full glass-bg ">
          <Grid2x2 color="white" />
        </View>
      </View>

      {/* main weather card section */}
      <View className="mt-6">
        <Main_weather />
      </View>

      {/* Additional weather content*/}

      <View className="glass-bg px-3 py-1 rounded-2xl mt-3 flex flex-row items-center justify-between   gap-2">
        <View className="flex items-center justify-center py-4 ">
          <View className="flex items-center justify-center">
            <Bubbles color="white" />
            <View className="text-center">
              <Text className="font-bold text-white/90 text-lg">20%</Text>
              <Text className="text-white/50 text-sm font-light">Humidity</Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center py-4">
          <View className="flex items-center justify-center">
            <CloudHail color="white" />
            <View className="text-center flex items-center justify-center">
              <Text className="font-bold text-white/90 text-lg">0 mm</Text>
              <Text className="text-white/50 text-sm font-light">Rainfall</Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center py-4">
          <View className="flex items-center justify-center">
            <Wind color="white" />
            <View className="text-center flex items-center justify-center">
              <Text className="font-bold text-white/90 text-lg">15 km/h</Text>
              <Text className="text-white/50 text-sm font-light">
                Wind speed
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* today forecast section */}
      <View className="mt-3">
        {/* upper text */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-2xl font-bold">
            Today's Forecast
          </Text>
          <View>
            <Text className="text-white text-sm font-light flex flex-col gap-2">
              7-Days
            </Text>
            <ArrowRight color="white" size={15} />
          </View>
        </View>

        {/* small cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 5, paddingVertical: 10 }}
        >
          <Small_card title="Now" icon={"sunny"} temperature="30 °C" />
          <Small_card title="Morning" icon={"cloudy"} temperature="25 °C" />
          <Small_card title="Afternoon" icon={"rainy"} temperature="28 °C" />
          <Small_card title="Evening" icon={"sunny"} temperature="22 °C" />
        </ScrollView>
      </View>

      {/* saved locations section */}

      <View>
        <View className="flex flex-row items-center justify-between mt-3">
          <Text className="text-white text-2xl font-bold">Saved Locations</Text>
          <Text className="text-purple-500 text-sm font-light">Manage</Text>
        </View>

        <View>
          <LocationCard
            location="Colombo"
            temperature={30}
            low={25}
            high={35}
            humidity={20}
            icon="sunny"
          />

          <LocationCard
            location="Kandy"
            temperature={28}
            low={22}
            high={32}
            humidity={30}
            icon="cloudy"
          />

          <LocationCard
            location="Galle"
            temperature={26}
            low={20}
            high={30}
            humidity={40}
            icon="rainy"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
