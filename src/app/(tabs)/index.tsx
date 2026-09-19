import * as Location from "expo-location";
import {
  ArrowRight,
  Bubbles,
  CloudHail,
  EllipsisVertical,
  Grid2x2,
  Navigation,
  Wind,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import LocationCard from "../../../components/LocationCard";
import Main_weather from "../../../components/Main_weather";
import ProgressBar from "../../../components/Progress";
import Small_card from "../../../components/Small_card";
import Weather_loading from "../../../components/Weather_loading";
import { useLocation } from "../../../hooks/useLocation";
import { useWeather } from "../../../hooks/useWeather";
const index = () => {
  // get device location
  const [placeName, setPlaceName] = useState<any | null>(null);
  const { location, errorMsg, loading, getLocation } = useLocation();
  const {
    weatherData,
    errorMsg: error,
    loading: weatherLoading,
    fetchWeatherData,
  } = useWeather(location?.latitude || 0, location?.longitude || 0);

  useEffect(() => {
    const getPlaceName = async () => {
      if (location) {
        try {
          const place = await Location.reverseGeocodeAsync({
            latitude: location.latitude,
            longitude: location.longitude,
          });

          if (place && place.length > 0) {
            setPlaceName(place[0] || "Unknown Location");
          }
        } catch (error) {
          console.log("Error getting place name:", error);
        }
      }
    };

    getPlaceName();
  }, [location?.latitude, location?.longitude]);

  console.log(weatherData);

  if (loading || weatherLoading) {
    return <Weather_loading />;
  }

  if (errorMsg || error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{errorMsg || error}</Text>
        <Button
          title="Retry"
          onPress={() => {
            getLocation();
            fetchWeatherData();
          }}
        />
      </View>
    );
  }

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
            <Text className="text-2xl font-bold text-white/90">
              {placeName?.city}
            </Text>
          </View>

          <Text className="text-white/50 text-center">
            {placeName?.subregion} : {placeName?.country}
          </Text>
        </View>

        <View className="p-3 rounded-full glass-bg ">
          <Grid2x2 color="white" />
        </View>
      </View>

      {/* main weather card section */}
      <View className="mt-6">
        <Main_weather
          temprature={weatherData?.current?.apparent_temperature}
          weather_code={weatherData?.current?.weather_code}
          unit={weatherData?.current_units?.apparent_temperature}
        />
      </View>

      {/* Additional weather content*/}

      <View className="glass-bg px-3 py-1 rounded-2xl mt-3 flex flex-row items-center justify-between   gap-2">
        <View className="flex items-center justify-center py-4 ">
          <View className="flex items-center justify-center">
            <Bubbles color="white" />
            <View className="text-center">
              <Text className="font-bold text-white/90 text-lg">
                {weatherData?.current?.relative_humidity_2m}{" "}
                {weatherData?.current_units?.relative_humidity_2m}
              </Text>
              <Text className="text-white/50 text-sm font-light">Humidity</Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center py-4">
          <View className="flex items-center justify-center">
            <CloudHail color="white" />
            <View className="text-center flex items-center justify-center">
              <Text className="font-bold text-white/90 text-lg">
                {weatherData?.current?.precipitation}{" "}
                {weatherData?.current_units?.precipitation}
              </Text>
              <Text className="text-white/50 text-sm font-light">Rainfall</Text>
            </View>
          </View>
        </View>

        <View className="flex items-center justify-center py-4">
          <View className="flex items-center justify-center">
            <Wind color="white" />
            <View className="text-center flex items-center justify-center">
              <Text className="font-bold text-white/90 text-lg">
                {weatherData?.current?.wind_speed_10m}{" "}
                {weatherData?.current_units?.wind_speed_10m}
              </Text>
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
          {weatherData?.hourly?.time
            ?.slice(0, 12)
            .map((time: string, index: number) => (
              <Small_card
                key={index}
                title={new Date(time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                icon={"sunny"}
                temperature={weatherData?.hourly?.temperature_2m?.[index]}
                unit={weatherData?.hourly_units?.temperature_2m}
                weather_code={weatherData?.hourly?.weathercode?.[index]}
              />
            ))}
        </ScrollView>
      </View>

      {/* Additional details */}

      <View className="mt-3">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-2xl font-semibold">
            Atmospheric Conditions
          </Text>
        </View>

        {/* 1st div */}
        <View className="flex flex-row gap-2 mt-2">
          {/* UV index */}
          <View className="flex-1 glass-bg rounded-lg flex items-center justify-center py-2">
            <View>
              <Image
                source={require("@/assets/images/card icons/Uv index.png")}
                className="w-24 h-24 mt-3 ml-3"
              />
            </View>
            <View className="flex items-center justify-center">
              <Text className="text-white font-bold">UV Index</Text>
              <Text className="text-white text-2xl font-bold">3 Low</Text>
              <Text className="text-white text-sm font-light text-center">
                Low risk of harm from UV rays
              </Text>
            </View>
          </View>

          {/* Precipitation */}
          <View className="flex-1 glass-bg rounded-lg flex items-center justify-center py-2">
            <View>
              <Image
                source={require("@/assets/images/card icons/visibility.png")}
                className="w-24 h-24 mt-3 ml-3"
              />
            </View>
            <View className="flex items-center justify-center text-center">
              <Text className="text-white font-bold">Visibility</Text>
              <Text className="text-white text-2xl font-bold">10 km</Text>
              <ProgressBar progress={30} />
              <Text className="text-white text-sm font-light text-center">
                Clear horizon
              </Text>
            </View>
          </View>
        </View>

        {/* 2nd div */}
        <View className="flex flex-row gap-2 mt-2">
          {/* UV index */}
          <View className="flex-1 glass-bg rounded-lg flex items-center justify-center py-2">
            <View>
              <Image
                source={require("@/assets/images/card icons/presure.png")}
                className="w-24 h-24 mt-3 ml-3"
              />
            </View>
            <View className="flex items-center justify-center">
              <Text className="text-white font-bold">Pressure</Text>
              <Text className="text-white text-2xl font-bold">1014 hPa</Text>
              <Text className="text-white text-sm font-light text-center">
                Stable hill terrain
              </Text>
            </View>
          </View>

          {/* Precipitation */}
          <View className="flex-1 glass-bg rounded-lg flex items-center justify-center py-2">
            <View>
              <Image
                source={require("@/assets/images/card icons/Air quality.png")}
                className="w-24 h-24 mt-3 ml-3"
              />
            </View>
            <View className="flex items-center justify-center text-center">
              <Text className="text-white font-bold">Air Quality</Text>
              <Text className="text-white text-2xl font-bold">Good</Text>
              <ProgressBar progress={30} />
              <Text className="text-white text-sm font-light text-center">
                101-150 Unhealthy for sensitive groups
              </Text>
            </View>
          </View>
        </View>
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
