import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

export default function HomeScreen() {
  return (
    // <ThemedView style={styles.container}>
    <SafeAreaView>
      <ThemedText type="default">Hello</ThemedText>
      <ThemedText>hi</ThemedText>
    </SafeAreaView>
    // </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
