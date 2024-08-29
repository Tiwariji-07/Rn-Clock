import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ThemedText } from "./ThemedText";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.8;
const date = new Date();
const CLOCK_RADIUS = (SIZE * 0.8) / 2;
const CENTER = CLOCK_RADIUS;

const ClockUi = () => {
  let [sec, setSec] = useState(date.getSeconds() * 6);
  let [min, setMin] = useState(
    date.getMinutes() * 6 + (date.getSeconds() * 6) / 60
  );
  let [hour, setHour] = useState(
    date.getHours() * 30 + date.getMinutes() * 0.5 + date.getSeconds() / 120
  );
  let [data, setdata] = useState(date);

  useEffect(() => {
    const interval = setInterval(() => {
      let d = new Date();
      setdata(d);
      setSec(d.getSeconds() * 6);
      setMin(d.getMinutes() * 6 + (d.getSeconds() * 6) / 60);
      setHour(d.getHours() * 30 + d.getMinutes() * 0.5 + d.getSeconds() / 120);
    }, 1000);
    // return clearInterval(interval);
  }, []);

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30 * (Math.PI / 180); // Convert to radians
      const x = CENTER + (CLOCK_RADIUS - 20) * Math.sin(angle);
      const y = CENTER - (CLOCK_RADIUS - 20) * Math.cos(angle);
      numbers.push(
        <Text key={i} style={[styles.number, { top: y - 10, left: x - 10 }]}>
          {"●"}
        </Text>
      );
    }
    return numbers;
  };

  const rotateSeconds = "25deg";
  const transformSeconds = {
    transform: [
      {
        rotate: sec + "deg",
      },
    ],
  };

  const rotateMinutes = "65deg";
  const transformMinutes = {
    transform: [
      {
        rotate: min + "deg",
      },
    ],
  };

  const rotateHours = "45deg";
  const transformHours = {
    transform: [
      {
        rotate: hour + "deg",
      },
    ],
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 20 }}>
      <View style={styles.container}>
        <View style={[styles.bigQuadrant]}>
          {
            // renderNumbers()
          }
        </View>
        <View style={[styles.mediumQuadrant]} />
        <View style={[styles.mover, transformHours]}>
          <View style={[styles.hours]} />
        </View>
        <View style={[styles.mover, transformMinutes]}>
          <View style={[styles.minutes]} />
        </View>
        <View style={[styles.mover, transformSeconds]}>
          <View style={[styles.seconds]} />
        </View>
        <View style={[styles.smallQuadrant]} />
      </View>
      <Text style={styles.time}>{data.toLocaleTimeString()}</Text>
    </View>
  );
};

export default ClockUi;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    height: SIZE,
    width: SIZE,
    // position: "relative",
  },
  mover: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hours: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "35%",
    marginTop: "15%",
    width: 4,
    borderRadius: 4,
  },
  minutes: {
    backgroundColor: "rgba(0,0,0,0.8)",
    height: "45%",
    marginTop: "5%",
    width: 3,
    borderRadius: 3,
  },
  seconds: {
    backgroundColor: "rgba(277,71,134,1)",
    height: "50%",
    width: 2,
    borderRadius: 2,
  },
  bigQuadrant: {
    width: SIZE * 0.8,
    height: SIZE * 0.8,
    borderRadius: SIZE * 0.4,
    backgroundColor: "rgba(200,200,200,0.2)",
    position: "absolute",
    // zIndex: 1,
  },
  mediumQuadrant: {
    width: SIZE * 0.5,
    height: SIZE * 0.5,
    borderRadius: SIZE * 0.25,
    backgroundColor: "rgba(200,200,200,0.4)",
    position: "absolute",
    // zIndex: 2,
  },
  smallQuadrant: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(227,71,134,1)",
    position: "absolute",
  },
  number: {
    position: "absolute",
    color: "#000",
    fontSize: 14,
    // fontFamily: "ManufakturLight",
    // fontWeight: "bold",
    // zIndex: 3,
  },
  time: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "ManufakturMedium",
  },
});
