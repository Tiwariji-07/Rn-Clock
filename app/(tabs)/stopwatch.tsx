import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";

import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedButton } from "@/components/ThemedButton";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";

import AnalogUi from "@/components/AnalogUi";
import LapCard from "@/components/LapCard";
import { FlashList } from "@shopify/flash-list";
export default function StopWatchScreen() {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // Running status
  const [laps, setLaps] = useState([]); // Array to store laps
  const intervalRef = useRef(); // Ref to store interval

  // Start or Pause the stopwatch
  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current ?? ""); // Stop the interval
    } else {
      // Start the interval
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment time by 10ms
      }, 10);
    }
    setIsRunning(!isRunning); // Toggle running status
  };

  // Reset the stopwatch
  const handleReset = () => {
    clearInterval(intervalRef.current); // Clear interval
    setTime(0); // Reset time
    setLaps([]); // Clear laps
    setIsRunning(false); // Set running status to false
  };

  // Flag a lap
  const handleLap = () => {
    // laps.unshift(time);
    setLaps([time, ...laps]); // Add current time to laps
  };

  // Format time into mm:ss:ms
  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnalogUi />
        <ThemedText type="title" style={{ position: "absolute", fontSize: 36 }}>
          {formatTime(time)}
        </ThemedText>
      </View>
      <View
        style={{
          width: Dimensions.get("screen").width * 0.8,
          // height: 500,
          flex: 1,
          marginTop: 20,
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <FlashList
          data={laps}
          extraData={{}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            // <Text style={styles.lapText}>
            //   Lap {index + 1}: {formatTime(item)}
            // </Text>
            <LapCard item={formatTime(item)} index={laps.length - index} />
          )}
          // style={styles.lapList}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
          // inverted={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {time ? (
            <ThemedButton
              onPress={handleReset}
              disabled={isRunning}
              style={[styles.scndBtn, { display: !time ? "none" : "flex" }]}
            >
              <FontAwesome6
                name="arrow-rotate-left"
                size={20}
                color="#FE6B6D"
              />
            </ThemedButton>
          ) : (
            <View style={{ width: 40 }}></View>
          )}
          <ThemedButton onPress={handleStartPause} style={styles.button}>
            <ThemedText type="defaultSemiBold" style={{ color: "white" }}>
              {isRunning ? (
                <Ionicons name="pause" size={24} />
              ) : (
                <Ionicons name="play" size={24} />
              )}
            </ThemedText>
          </ThemedButton>
          {/* <Button title="Flag" onPress={handleLap} disabled={!isRunning} /> */}
          {isRunning ? (
            <ThemedButton
              onPress={handleLap}
              disabled={!isRunning}
              style={[
                styles.scndBtn,
                { display: !isRunning ? "none" : "flex" },
              ]}
            >
              <Entypo name="stopwatch" size={20} color="#FE6B6D" />
            </ThemedButton>
          ) : (
            <View style={{ width: 40 }}></View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
    // backgroundColor: "#fff",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 25,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // width: "60%",
    marginBottom: 20,
    // gap: 20,
  },
  lapList: {
    width: "80%",
    marginTop: 20,
  },
  lapText: {
    fontSize: 20,
    marginVertical: 5,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  scndBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F0FA",
  },
});
