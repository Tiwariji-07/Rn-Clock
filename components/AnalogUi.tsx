import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.8;
const CLOCK_RADIUS = SIZE / 2;
const CENTER = CLOCK_RADIUS;
const AnalogUi = () => {
  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 120; i++) {
      const angle = i * 10 * (Math.PI / 180); // Convert to radians
      const x = CENTER + (CLOCK_RADIUS - 10) * Math.sin(angle);
      const y = CENTER - (CLOCK_RADIUS - 10) * Math.cos(angle);
      numbers.push(
        <Text
          key={i}
          style={[
            styles.number,
            {
              top: y - 10,
              left: x - 5,
              transform: [{ rotate: `${i * 10}deg` }],
            },
          ]}
        >
          {"|"}
        </Text>
      );
    }
    return numbers;
  };
  return (
    <View style={styles.container}>
      <View style={[styles.bigQuadrant, styles.boxWithShadow]}>
        {renderNumbers()}
      </View>
      <View style={[styles.mediumQuadrant, styles.boxWithShadow]}></View>
      <View style={[styles.smallQuadrant, styles.boxWithShadow]}></View>
      <View style={[styles.smallerQuadrant, styles.boxWithShadow]}></View>
    </View>
  );
};

export default AnalogUi;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    height: SIZE,
    width: SIZE,
  },
  bigQuadrant: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE * 0.5,
    backgroundColor: "#FBFBFE",
    position: "absolute",
    // zIndex: 1,
  },
  mediumQuadrant: {
    width: SIZE * 0.8,
    height: SIZE * 0.8,
    borderRadius: SIZE * 0.4,
    backgroundColor: "#FFFEFE",
    position: "absolute",
    // zIndex: 2,
  },
  smallQuadrant: {
    width: SIZE * 0.6,
    height: SIZE * 0.6,
    borderRadius: SIZE * 0.3,
    backgroundColor: "#FFFEFE",
    position: "absolute",
  },
  smallerQuadrant: {
    width: SIZE * 0.4,
    height: SIZE * 0.4,
    borderRadius: SIZE * 0.3,
    backgroundColor: "#FFFEFE",
    position: "absolute",
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 2,
  },
  number: {
    position: "absolute",
    color: "#E2E6F1",
    fontSize: 14,
    // fontFamily: "ManufakturLight",
    // fontWeight: "bold",
    // zIndex: 3,
  },
});
