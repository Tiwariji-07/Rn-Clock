import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonColor"
  );

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />
  );
}
