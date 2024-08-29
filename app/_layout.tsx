import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import AppLoading from "expo-app-loading";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ManufakturBlack: require("../assets/fonts/Manufaktur-Black.ttf"),
    // ManufakturBlackIt: require("../assets/fonts/Manufaktur-Blacklt"),
    ManufakturLight: require("../assets/fonts/Manufaktur-Light.ttf"),
    ManufakturMedium: require("../assets/fonts/Manufaktur-Medium.ttf"),
    ManufakturBold: require("../assets/fonts/Manufaktur-Bold.ttf"),
    ManufakturHeavy: require("../assets/fonts/Manufaktur-Heavy.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
    // <AppLoading
    // // startAsync={"manufaktur"}
    // // onFinish={() => SetIsReady(true)}
    // // onError={() => {}}
    // />
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
