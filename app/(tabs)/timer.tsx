import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TimeInput from "@/components/TimeInput";
import useTimerState from "@/store/timerValue";
import { ThemedButton } from "@/components/ThemedButton";
import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import TimerCountdown from "@/components/TimerCountdown";

export default function TimerScreen() {
  const { hour, minute, second } = useTimerState();
  const [isRunning, setIsRunning] = useState(false);
  const [palyed, setPlayed] = useState(false);
  return (
    <SafeAreaView style={styles.Container}>
      {palyed ? <></> : <TimeInput />}
      {/* <ThemedText>{hour + minute + second}</ThemedText> */}
      {palyed ? (
        <TimerCountdown isRunning={isRunning} setIsRunning={setIsRunning} />
      ) : (
        <></>
      )}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {palyed ? (
            <ThemedButton
              onPress={() => {
                setIsRunning(false);
                setPlayed(!palyed);
              }}
              // disabled={isRunning}
              style={[styles.scndBtn, { display: !palyed ? "none" : "flex" }]}
            >
              <MaterialIcons name={"delete"} size={20} color="#FE6B6D" />
            </ThemedButton>
          ) : (
            <View style={{ width: 40 }}></View>
          )}
          {parseInt(hour + minute + second) > 0 ? (
            <ThemedButton
              style={styles.button}
              onPress={() => {
                setIsRunning(!isRunning);
                setPlayed(true);
              }}
            >
              <Ionicons
                name={isRunning ? "pause" : "play"}
                size={24}
                color="white"
              />
            </ThemedButton>
          ) : (
            <></>
          )}
          {/* <Button title="Flag" onPress={handleLap} disabled={!isRunning} /> */}
          {isRunning ? (
            <ThemedButton
              // onPress={handleLap}
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
      {/* {parseInt(hour + minute + second) > 0 ? (
        <ThemedButton
          style={styles.playButton}
          onPress={() => {
            setIsRunning(!isRunning);
            setPlayed(true);
          }}
        >
          <Ionicons
            name={isRunning ? "pause" : "play"}
            size={24}
            color="white"
          />
        </ThemedButton>
      ) : (
        <></>
      )} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  playButton: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 25,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
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
    height: 70,
    width: 70,
    borderRadius: 35,
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
