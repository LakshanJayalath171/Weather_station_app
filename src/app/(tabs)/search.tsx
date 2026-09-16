import { Search, SlidersHorizontal } from "lucide-react-native";
import { ScrollView, Text, TextInput, View } from "react-native";
import Location_weather from "../../../components/Location_weather";
import LocationCard from "../../../components/LocationCard";

const search = () => {
  return (
    <ScrollView>
      {/* Search Input */}
      <View className="flex-row items-center rounded-full bg-white/10 border border-white/15 px-6 py-2">
        <Search color="#94A3B8" size={20} />
        <TextInput
          placeholder="Search Location"
          placeholderTextColor="#94A3B8"
          className="text-white ml-2"
        />
      </View>
      {/* weather details */}
      <Location_weather />

      {/* saved location */}
      <View className="flex flex-row items-center justify-between mt-3">
        <View>
          <View>
            <Text className="text-white text-lg font-bold">Saved Location</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-center gap-2">
          <SlidersHorizontal color="#94A3B8" size={20} />
          <Text className="text-rain">Reorder</Text>
        </View>
      </View>
      <View>
        <LocationCard
          icon="sunny"
          location="New York"
          temperature={28}
          low={20}
          high={30}
          humidity={60}
        />

        <LocationCard
          icon="cloudy"
          location="Los Angeles"
          temperature={25}
          low={18}
          high={32}
          humidity={55}
        />

        <LocationCard
          icon="rainy"
          location="Chicago"
          temperature={22}
          low={15}
          high={28}
          humidity={70}
        />
      </View>
    </ScrollView>
  );
};

export default search;
