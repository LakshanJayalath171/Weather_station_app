import { View } from "react-native";
import Skeleton from "../components/Skelton";

export default function Weather_loading() {
  return (
    <View className="flex-1 px-5 pt-6">
      {/* Location */}
      <Skeleton width={120} height={18} radius={8} />

      {/* Main temperature */}
      <View className="items-center mt-10">
        {/* Weather icon */}
        <Skeleton width={120} height={120} radius={60} />

        {/* Temperature */}
        <Skeleton
          width={150}
          height={60}
          radius={15}
          style={{
            marginTop: 20,
          }}
        />

        {/* Condition */}
        <Skeleton
          width={110}
          height={18}
          radius={8}
          style={{
            marginTop: 12,
          }}
        />
      </View>

      {/* Weather glass card */}
      <View
        className="mt-10 p-5 rounded-3xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.07)",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <Skeleton width={100} height={16} />

        <View className="flex-row justify-between mt-6">
          <View className="items-center">
            <Skeleton width={45} height={45} radius={15} />
            <Skeleton
              width={45}
              height={12}
              radius={6}
              style={{ marginTop: 10 }}
            />
          </View>

          <View className="items-center">
            <Skeleton width={45} height={45} radius={15} />
            <Skeleton
              width={45}
              height={12}
              radius={6}
              style={{ marginTop: 10 }}
            />
          </View>

          <View className="items-center">
            <Skeleton width={45} height={45} radius={15} />
            <Skeleton
              width={45}
              height={12}
              radius={6}
              style={{ marginTop: 10 }}
            />
          </View>

          <View className="items-center">
            <Skeleton width={45} height={45} radius={15} />
            <Skeleton
              width={45}
              height={12}
              radius={6}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
      </View>

      {/* Forecast */}
      <View className="mt-8">
        <Skeleton width={100} height={16} />

        <View className="flex-row mt-5 gap-3">
          <Skeleton width={90} height={120} radius={20} />

          <Skeleton width={90} height={120} radius={20} />

          <Skeleton width={90} height={120} radius={20} />

          <Skeleton width={90} height={120} radius={20} />
        </View>
      </View>
    </View>
  );
}
