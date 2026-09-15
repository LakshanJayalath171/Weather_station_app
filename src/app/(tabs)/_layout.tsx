import { Tabs } from "expo-router";
import { CalendarDays, Home, Search, Settings } from "lucide-react-native";
import { View, type ReactNode } from "react-native";

type TabIconProps = {
  icon: ReactNode;
  focused: boolean;
  text: string;
};

const _layout = () => {
  const TabIcon = ({ icon, focused, text }: TabIconProps) => {
    if (focused) {
      return <View className="rounded-lg p-3 glass-bg">{icon}</View>;
    } else {
      return <View className="">{icon}</View>;
    }
  };
  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 10,
          height: 56,
          paddingBottom: 0,
          backgroundColor: "transparent",
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              borderRadius: 25,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.20)",
            }}
          ></View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<Home color="white" />}
              text="search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="previos"
        options={{
          title: "Previos",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<CalendarDays color="white" />}
              text="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<Search color="white" />}
              text="search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<Settings color="white" />}
              text="setting"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
