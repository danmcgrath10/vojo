import { Stack } from "expo-router";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";

import {Colors} from "../constants/Color";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === "dark" ? customDarkTheme : customLightTheme;

  return (
    <SafeAreaProvider>
       <PaperProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
