import { View } from "react-native";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View className="w-full h-2 overflow-hidden rounded-full bg-white/10 mt-1">
      <View
        className="h-full rounded-full bg-sky-400"
        style={{ width: `${clampedProgress}%` }}
      />
    </View>
  );
}
