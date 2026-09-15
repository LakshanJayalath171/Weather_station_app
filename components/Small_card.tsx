import { Text, View } from "react-native";

const Small_card = ({ icon, title, temperature }) => {
  return (
    <View className="w-24 h-36 glass-bg rounded-2xl items-center justify-center flex gap-3">
      <Text className="text-white text-lg font-bold">{title}</Text>
      {icon}
      <Text className="text-white text-sm font-semibold">{temperature}</Text>
    </View>
  );
};

export default Small_card;
