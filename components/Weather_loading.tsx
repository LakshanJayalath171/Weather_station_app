import { ScrollView, View } from "react-native";
import Skeleton from "../components/Skelton";

export default function Weather_loading() {
  return (
    <ScrollView className="px-4 py-2">
      <View className="flex-row items-center justify-between gap-4">
        <View>
          <Skeleton width={50} height={50} radius={50} />
        </View>
        <View>
          <Skeleton width={210} height={50} radius={10} />
        </View>
        <View>
          <Skeleton width={50} height={50} radius={50} />
        </View>
      </View>

      <View className="flex-row items-center justify-center gap-2 py-4">
        <View className="flex-1">
          <Skeleton width={100} height={100} radius={50} />
        </View>

        <View className="flex-4 gap-2">
          <Skeleton width={200} height={10} radius={8} />
          <Skeleton width={200} height={10} radius={8} />
          <Skeleton width={200} height={10} radius={8} />
        </View>
      </View>

      <View>
        <Skeleton
          width={"100%"}
          height={350}
          radius={20}
          style={{ marginTop: 10 }}
        />
      </View>

      <Skeleton width={200} height={10} radius={8} style={{ marginTop: 20 }} />

      <View>
        <Skeleton
          width={"100%"}
          height={150}
          radius={20}
          style={{ marginTop: 10 }}
        />
      </View>

      <View>
        <Skeleton
          width={200}
          height={10}
          radius={8}
          style={{ marginTop: 20 }}
        />

        <View className="flex-row gap-3 my-4">
          <Skeleton width={100} height={100} radius={20} />
          <Skeleton width={100} height={100} radius={20} />
          <Skeleton width={100} height={100} radius={20} />
          <Skeleton width={100} height={100} radius={20} />
        </View>
      </View>
    </ScrollView>
  );
}
