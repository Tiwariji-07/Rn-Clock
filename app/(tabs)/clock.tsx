import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  Button,
  TouchableOpacity,
  View,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClockUi from "@/components/ClockUi";
import { Colors } from "@/constants/Colors";
import { ThemedButton } from "@/components/ThemedButton";
import { useFocusEffect, useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getItem } from "@/utils/Storage";
import useTimeZoneStore from "@/store/timeZoneStore";
import { FlashList } from "@shopify/flash-list";
import { CityStoreType } from "@/store/interface";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Clock</ThemedText>
      <View style={{ alignItems: "center", flex: 1 }}>
        <ClockUi />
        <ThemedButton
          style={styles.button}
          onPress={() => navigation.navigate("addcity")}
        >
          <Ionicons name="add" color={"white"} size={24} />
        </ThemedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#F6F8FF",
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
    bottom: 10,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
