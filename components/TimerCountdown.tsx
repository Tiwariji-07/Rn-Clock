import { Animated as A, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useTimerState from "@/store/timerValue";
import {
  AnimatedCircularProgress,
  CircularProgress,
} from "react-native-circular-progress";
import Animated from "react-native-reanimated";
import { Circle, G, Svg, Text as SvgText } from "react-native-svg";

interface CountdownProps {
  isRunning: boolean;
  setIsRunning: (value: boolean) => void;
}

const TimerCountdown = ({ isRunning, setIsRunning }: CountdownProps) => {
  // Constants for circle dimensions
  const radius = 100;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  const { hour, minute, second } = useTimerState();
  const initialTimeInSeconds =
    parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

  const [timeLeft, setTimeLeft] = useState<number>(
    parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second)
  ); // Total time in seconds
  //   const [isRunning, setIsRunning] = useState(false); // Timer running state
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animated value for circular progress
  const animatedValue = useRef(new A.Value(0)).current;

  let progress = timeLeft / initialTimeInSeconds;
  let strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            progress = timeLeft / initialTimeInSeconds;
            strokeDashoffset = circumference * (1 - progress);
            // clearInterval(intervalRef.current); // Clear the interval
            handleReset();
            alert("Time's up!"); // Trigger alert
            return 0;
          }
          console.log("running");
          progress = timeLeft / initialTimeInSeconds;
          strokeDashoffset = circumference * (1 - progress);
          return prevTime - 1; // Decrease time by 1 second
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    A.timing(animatedValue, {
      toValue: 1,
      duration: timeLeft * 1000, // Set the animation duration based on remaining time
      useNativeDriver: true,
    }).start();
  };

  // Pause the countdown
  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset the countdown
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(initialTimeInSeconds);
    // animatedValue.setValue(0);
  };

  // Calculate progress based on remaining time

  const formatTime = (seconds: number): string => {
    const getHours: number = Math.floor(seconds / 3600);
    const getMinutes: number = Math.floor((seconds % 3600) / 60);
    const getSeconds: number = seconds % 60;
    return `${getHours.toString().padStart(2, "0")}:${getMinutes
      .toString()
      .padStart(2, "0")}:${getSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <View>
      <View>
        <Svg height="250" width="250" viewBox="0 0 250 250">
          <G rotation="-90" origin="125, 125">
            <Circle
              cx="125"
              cy="125"
              r={radius}
              stroke="#e6e6e6"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx="125"
              cy="125"
              r={radius}
              stroke={"rgb(108,70,254)"}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference}`}
              strokeDashoffset={strokeDashoffset}
              fill="none"
              strokeLinecap="round"
            />
          </G>
          <SvgText
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={radius / 2.5}
            // fill={color}
            fontWeight="bold"
          >
            {formatTime(timeLeft)}
          </SvgText>
        </Svg>
      </View>

      <View>
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

export default TimerCountdown;

const styles = StyleSheet.create({});
