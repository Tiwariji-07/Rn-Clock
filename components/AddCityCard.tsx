import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { useNavigation } from "expo-router";
import { getItem, removeItem, setItem } from "../utils/Storage";
import useTimeZoneStore from "@/store/timeZoneStore";
import { CityStoreType } from "@/store/interface";
// require("date-time-format-timezone"); // polyfill is ready

const AddCityCard = (cityStore: CityStoreType) => {
  let date = new Date();
  const { addCity } = useTimeZoneStore();
  const navigation = useNavigation();
  let f = () => {
    try {
      return date.toLocaleString("de-DE", {
        // hour: "numeric",
        hour12: false,
        timeZone: cityStore.zone,
        timeStyle: "short",
      });
    } catch (e) {
      return "";
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addCity(cityStore);
        navigation.goBack();
      }}
    >
      <ThemedText type="defaultSemiBold" style={styles.text}>
        {cityStore.name}
      </ThemedText>
      <ThemedText type="default" style={styles.text}>
        {f()}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default AddCityCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "rgb(233,237,249)",
    // borderBottomColor: "rgb(186, 202, 249)",
    // borderBottomWidth: 1,
    // margin: 5,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});
