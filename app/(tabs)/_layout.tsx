import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          height: 80,
          paddingBottom: 20,
          paddingTop: 20,
          borderRadius: 10,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Alarm",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "alarm" : "alarm-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          title: "Clock",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "time" : "time-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bedtime"
        options={{
          title: "Bed",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "bed" : "bed-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "Stopwatch",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "stopwatch" : "stopwatch-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "hourglass" : "hourglass-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
