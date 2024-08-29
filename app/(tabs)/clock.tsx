import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClockUi from "@/components/ClockUi";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Clock</Text>
      <ClockUi />
      <TouchableOpacity style={styles.button}>
        <Ionicons name="add" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
    // position: "relative",
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "ManufakturBold",
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
