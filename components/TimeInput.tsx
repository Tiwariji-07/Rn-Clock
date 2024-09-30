import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import useTimerState from "@/store/timerValue";
// import { TouchableOpacity } from "react-native-gesture-handler";

const inputTextType = "title";
const TimeInput = ({ lightColor, darkColor }) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "tint");

  const {
    hour,
    minute,
    second,
    setHour,
    setMinute,
    setSecond,
    handleBackSpace,
  } = useTimerState();

  //   const [hour, sethour] = useState("00");
  //   const [minute, setminute] = useState("00");
  //   const [second, setsecond] = useState("00");
  const [active, setActive] = useState("second");

  const hnadleKeyClick = async (num: string) => {
    console.log(num);
    // if the active input is hour, increment it by 1 and reset minute and second to 00
    if (active === "hour") {
      setHour(num);
    } else if (active === "minute") {
      setMinute(num);
    } else {
      setSecond(num);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ThemedText
          type="title"
          onPress={() => setActive("hour")}
          style={[active === "hour" ? { color } : null, styles.timeText]}
        >
          {hour}
        </ThemedText>
        <ThemedText type="defaultSemiBold">h</ThemedText>
        <ThemedText type="title"> : </ThemedText>
        <ThemedText
          type="title"
          onPress={() => setActive("minute")}
          style={[active === "minute" ? { color } : null, styles.timeText]}
        >
          {minute}
        </ThemedText>
        <ThemedText type="defaultSemiBold">m</ThemedText>
        <ThemedText type="title"> : </ThemedText>
        <ThemedText
          type="title"
          onPress={() => setActive("second")}
          style={[active === "second" ? { color } : null, styles.timeText]}
        >
          {second}
        </ThemedText>
        <ThemedText type="defaultSemiBold">s</ThemedText>
      </View>
      <View style={styles.keypadContainer}>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("1")}
          style={styles.key}
        >
          <ThemedText type="subtitle">1</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("2")}
          style={styles.key}
        >
          <ThemedText type="subtitle">2</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("3")}
          style={styles.key}
        >
          <ThemedText type="subtitle">3</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("4")}
          style={styles.key}
        >
          <ThemedText type="subtitle">4</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("5")}
          style={styles.key}
        >
          <ThemedText type="subtitle">5</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("6")}
          style={styles.key}
        >
          <ThemedText type="subtitle">6</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("7")}
          style={styles.key}
        >
          <ThemedText type="subtitle">7</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("8")}
          style={styles.key}
        >
          <ThemedText type="subtitle">8</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("9")}
          style={styles.key}
        >
          <ThemedText type="subtitle">9</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => hnadleKeyClick("")} style={styles.key}>
          <ThemedText type="subtitle"></ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => hnadleKeyClick("0")}
          style={styles.key}
        >
          <ThemedText type="subtitle">0</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleBackSpace(active)}
        >
          <Ionicons name={"backspace-sharp"} size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 10,
  },
  timeText: {
    fontSize: 42,
  },
  keypadContainer: {
    width: "75%",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },
  key: {
    width: "33.3%",
    alignItems: "center",
    padding: 15,
  },
});
