import { Slot } from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Global background */}
      <ImageBackground
        source={require("../../assets/background/night sky.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />

      {/* App content */}
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
