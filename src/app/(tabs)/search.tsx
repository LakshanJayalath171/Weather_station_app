import * as Location from "expo-location";
import { Search, SlidersHorizontal } from "lucide-react-native";
import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Location_weather from "../../../components/Location_weather";
import LocationCard from "../../../components/LocationCard";
import MapScreen from "../../../components/MapScreen";
import Weather_loading from "../../../components/Weather_loading";
import { useLocation } from "../../../hooks/useLocation";
import { useWeather } from "../../../hooks/useWeather";
import {
  LocationSearchResult,
  searchLocation,
} from "../../../services/weatherApi";

const search = () => {
  const [placeName, setPlaceName] =
    React.useState<Location.LocationGeocodedAddress | null>(null);
  const [selectedLocation, setSelectedLocation] =
    React.useState<LocationSearchResult | null>(null);
  const { location, errorMsg, loading, getLocation } = useLocation();

  // searching status and suggesstions

  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<LocationSearchResult[]>(
    [],
  );
  const [loadingSearch, setLoadingSearch] = React.useState(false);

  const weatherLatitude = selectedLocation?.latitude ?? location?.latitude ?? 0;
  const weatherLongitude =
    selectedLocation?.longitude ?? location?.longitude ?? 0;

  const {
    weatherData,
    errorMsg: error,
    loading: weatherLoading,
    fetchWeatherData,
  } = useWeather(weatherLatitude, weatherLongitude);

  useEffect(() => {
    const getPlaceName = async () => {
      if (location) {
        try {
          const place = await Location.reverseGeocodeAsync({
            latitude: location.latitude,
            longitude: location.longitude,
          });

          if (place && place.length > 0) {
            setPlaceName(place[0]);
          }
        } catch (error) {
          console.log("Error getting place name:", error);
        }
      }
    };

    getPlaceName();
  }, [location?.latitude, location?.longitude]);

  const handleSeach = async (query: string) => {
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      setLoadingSearch(true);
      const result = await searchLocation(query);
      setSuggestions(result);
    } catch (error) {
      console.log("Error searching location:", error);
      setSuggestions([]);
    } finally {
      setLoadingSearch(false);
    }
  };

  const handleLocationSelect = (selected: LocationSearchResult) => {
    setSearchQuery(selected.name);
    setSuggestions([]);
    setSelectedLocation(selected);
  };

  if (loading || weatherLoading) {
    return <Weather_loading />;
  }

  return (
    <ScrollView className="px-3">
      {/* Search Input */}
      <View className="flex-row items-center rounded-full bg-white/10 border border-white/15 px-6 py-2">
        <Search color="#94A3B8" size={20} />
        <TextInput
          value={searchQuery}
          onChangeText={handleSeach}
          placeholder="Search Location"
          placeholderTextColor="#94A3B8"
          className="text-white ml-2"
        />
      </View>
      {suggestions.length > 0 && (
        <View className="mt-2 glass-bg rounded-2xl overflow-hidden">
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleLocationSelect(item)}
                className="p-4 border-b border-white/10"
              >
                <Text className="text-white text-lg">{item.name}</Text>

                <Text className="text-white/60">
                  {item.admin1
                    ? `${item.admin1}, ${item.country}`
                    : item.country}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      {/* weather details */}
      <Location_weather
        city={selectedLocation?.name || placeName?.city || "Unknown Location"}
        region={placeName?.region || "Unknown Region"}
        time="en-US"
        weather_code={weatherData?.current?.weather_code ?? 0}
        temp={weatherData?.current?.apparent_temperature ?? 0}
        temp_unit={weatherData?.current_units?.apparent_temperature ?? ""}
        wind_Speed={weatherData?.current?.wind_speed_10m ?? 0}
        wind_speed_unit={weatherData?.current_units?.wind_speed_10m ?? ""}
        humidity={weatherData?.current?.relative_humidity_2m ?? 0}
        humidity_unit={weatherData?.current_units?.relative_humidity_2m ?? ""}
        precipitaion={weatherData?.current?.precipitation ?? 0}
        precipitaion_unit={weatherData?.current_units?.precipitation ?? ""}
      />

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

      {/* maps and radars */}
      <View className="mt-3 px-1 rounded-lg mb-10">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-lg font-bold">Maps & Radars</Text>
          <Text className="text-rain text-sm font-medium">Satellite HD</Text>
        </View>
        <View className="mt-2 rounded-2xl overflow-hidden">
          <MapScreen />
        </View>
      </View>
    </ScrollView>
  );
};

export default search;
