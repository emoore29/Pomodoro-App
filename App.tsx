import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Timer from "./components/Timer";

// set status bar styling based on platform
StatusBar.setBarStyle("dark-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("transparent");
  StatusBar.setTranslucent(true);
}

const App = () => {
  const [statusBarHeight, setStatusBarHeight] = useState<number>(24);
  const [typeOfSession, setTypeOfSession] = useState<string>("session");
  const [focusColor, setFocusColor] = useState<string>("#58427c"); // blue: 1a75a2, purple: 58427c
  const [restColor, setRestColor] = useState<string>("#405E40");
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [rest, setRest] = useState(5);
  const [minutes, setMinutes] = useState(sessionMinutes); // starts with a session, not a rest
  const [seconds, setSeconds] = useState(0);

  // offset app from the top based on the height of the status bar
  useEffect(() => {
    StatusBar.currentHeight && setStatusBarHeight(StatusBar.currentHeight);
  });

  return (
    <View
      style={[
        styles.pomodoro,
        { paddingTop: statusBarHeight },
        {
          backgroundColor: typeOfSession === "session" ? focusColor : restColor,
        },
      ]}
    >
      <Timer minutes={minutes} seconds={seconds} />
    </View>
  );
};

const styles = StyleSheet.create({
  pomodoro: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
