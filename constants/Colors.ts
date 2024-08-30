/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "rgb(108,70,254)";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#F6F8FF",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "EBEFF9",
    tabIconSelected: tintColorLight,
    buttonColor: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    buttonColor: tintColorDark,
  },
};
