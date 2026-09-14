// importing weather state images

import clear_sunny from "./State images/clear_sunny.png";
import cloudy_overcast from "./State images/cloudy_overcast.png";
import freezing_rain from "./State images/freezing_rain.png";
import heavy_rain from "./State images/heavy_rain.png";
import heavy_snow from "./State images/heavy_snow.png";
import light_rain from "./State images/light_rain.png";
import lightning from "./State images/lightning.png";
import mist from "./State images/mist.png";
import mostly_cloudy from "./State images/mostly_cloudy.png";
import partly_cloudy from "./State images/partly_cloudy.png";
import rain from "./State images/rain.png";
import rain_showers from "./State images/rain_showers.png";
import sandstorm from "./State images/sandstorm.png";
import sleet_ice from "./State images/sleet_ice.png";
import snow from "./State images/snow.png";
import snow_shower from "./State images/snow_shower.png";
import thunder_storm from "./State images/thunder_storm.png";

export const weatherStates = [
  {
    key: "clear_sunny",
    name: "Clear Sky",
    codes: [0],
    image: clear_sunny,
  },

  {
    key: "partly_cloudy",
    name: "Partly Cloudy",
    codes: [1],
    image: partly_cloudy,
  },

  {
    key: "mostly_cloudy",
    name: "Mostly Cloudy",
    codes: [2],
    image: mostly_cloudy,
  },

  {
    key: "cloudy_overcast",
    name: "Overcast",
    codes: [3],
    image: cloudy_overcast,
  },

  {
    key: "mist",
    name: "Mist",
    codes: [45, 48],
    image: mist,
  },

  {
    key: "light_rain",
    name: "Light Rain",
    codes: [51, 53],
    image: light_rain,
  },

  {
    key: "heavy_rain",
    name: "Heavy Rain",
    codes: [55],
    image: heavy_rain,
  },

  {
    key: "freezing_rain",
    name: "Freezing Rain",
    codes: [56, 57],
    image: freezing_rain,
  },

  {
    key: "rain",
    name: "Rain",
    codes: [61, 63],
    image: rain,
  },

  {
    key: "heavy_rain",
    name: "Heavy Rain",
    codes: [65],
    image: heavy_rain,
  },

  {
    key: "freezing_rain",
    name: "Freezing Rain",
    codes: [66, 67],
    image: freezing_rain,
  },
  {
    key: "sandstorm",
    name: "Sandstorm",
    codes: [91],
    image: sandstorm,
  },
  {
    key: "snow",
    name: "Snow",
    codes: [71, 73],
    image: snow,
  },

  {
    key: "heavy_snow",
    name: "Heavy Snow",
    codes: [75],
    image: heavy_snow,
  },

  {
    key: "sleet_ice",
    name: "Sleet / Ice Pellets",
    codes: [77],
    image: sleet_ice,
  },

  {
    key: "rain_showers",
    name: "Rain Showers",
    codes: [80, 81],
    image: rain_showers,
  },

  {
    key: "heavy_rain",
    name: "Heavy Rain Showers",
    codes: [82],
    image: heavy_rain,
  },

  {
    key: "snow_shower",
    name: "Snow Showers",
    codes: [85],
    image: snow_shower,
  },

  {
    key: "heavy_snow",
    name: "Heavy Snow Showers",
    codes: [86],
    image: heavy_snow,
  },

  {
    key: "thunder_storm",
    name: "Thunderstorm",
    codes: [95],
    image: thunder_storm,
  },

  {
    key: "lightning",
    name: "Thunderstorm + Hail",
    codes: [96, 99],
    image: lightning,
  },
];
