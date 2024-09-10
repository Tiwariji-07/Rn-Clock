import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.8;
const LapCard = ({ item, index }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.citiesContainer}>
      <ThemedText type="defaultSemiBold" style={styles.text}>
        {"Lap " + index}
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedText type="default" style={styles.text}>
          {item}
        </ThemedText>
        {/* <Ionicons
          name="remove-circle"
          size={20}
          style={{ color: Colors[colorScheme ?? "light"].tint }}
        /> */}
      </View>
    </View>
  );
};

export default LapCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  citiesContainer: {
    // flex: 1,
    // height: 50,
    width: SIZE,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",

    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 5,
  },
});
