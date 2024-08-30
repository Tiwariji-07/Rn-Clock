import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import AppLoading from "expo-app-loading";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigation = useNavigation();

  const [clockData, setClockData] = useState([]);

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
        <Stack.Screen
          name="addcity"
          options={{
            headerTitle: "Add City",
            headerTitleStyle: { fontFamily: "ManufakturMedium" },
            // headerSearchBarOptions:{}
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
