import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ios = Platform.OS == 'ios';
export default function Index() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios?"-mb-2":"mb-3"}>
        <StatusBar style="light"/>
        {/* searchbar and logo */}
        <View className="flex-row justify-between items-center mx-4">
          <Text className="text-white">Hello buddy</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
