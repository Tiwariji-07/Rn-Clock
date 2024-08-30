import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Cities } from "../assets/countriesData";
import { FlashList } from "@shopify/flash-list";
import AddCityCard from "@/components/AddCityCard";
import { CityStoreType } from "@/store/interface";
import { ThemedText } from "@/components/ThemedText";

const addcity = () => {
  // const
  const cities: (CityStoreType | string)[] = Cities;
  return (
    <View style={styles.container}>
      <FlashList
        data={cities}
        // keyExtractor={({item}) => }
        renderItem={({ item }) => {
          if (typeof item === "string") {
            // Rendering header
            return (
              <ThemedText type="title" style={{ marginLeft: 15 }}>
                {item}
              </ThemedText>
            );
          } else {
            // Render item
            return <AddCityCard name={item.name} zone={item.zone} />;
          }
        }}
        estimatedItemSize={10000}
        getItemType={(item) => {
          // To achieve better performance, specify the type based on the item
          return typeof item === "string" ? "sectionHeader" : "row";
        }}
        persistentScrollbar
      />
    </View>
  );
};

export default addcity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
