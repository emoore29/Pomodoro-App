import { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import Timer from "./components/Timer";
import {
  toggleSessionType,
  updateDisplayOfMinutes,
} from "./utils/utilityFunctions";
import UpdateTimes from "./components/UpdateTimes";
import ToggleSession from "./components/ToggleSession";

// set status bar styling based on platform
StatusBar.setBarStyle("dark-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("transparent");
  StatusBar.setTranslucent(true);
}

const App = () => {
  // Display
  const [statusBarHeight, setStatusBarHeight] = useState<number>(24);
  const [focusColor, setFocusColor] = useState<string>("#58427c"); // blue: 1a75a2, purple: 58427c
  const [restColor, setRestColor] = useState<string>("#405E40");

  // Times
  const [typeOfSession, setTypeOfSession] = useState<string>("focus");
  const [focusMinutes, setFocusMinutes] = useState<number>(1);
  const [restMinutes, setRestMinutes] = useState(1);

  const [minutes, setMinutes] = useState<number>(focusMinutes); // starts with a session, not a rest
  const [seconds, setSeconds] = useState<number>(0);

  // Updating times

  // Other
  const [play, setPlay] = useState<boolean>(false); // default paused

  // UseEffect runs on every render and
  useEffect(() => {
    if (play) {
      var interval = setInterval(() => {
        if (seconds == 0) {
          // Reached the end of a minute and the start of a new minute
          if (minutes !== 0) {
            // There are still some minutes left in the timer
            setSeconds(59);
            setMinutes((prev) => prev - 1);
          } else {
            // minutes && seconds == 0 (end of timer)
            toggleSessionType(typeOfSession, setTypeOfSession, setSeconds);
            if (typeOfSession == "focus") {
              //
              setMinutes(restMinutes - 1);
            } else {
              setMinutes(focusMinutes - 1);
            }
            setSeconds(59);
          }
        } else {
          // seconds !== 0
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    // cleanup function ensures the interval stops and does not continue to execute if the play state changes.
    return () => clearInterval(interval);
  });

  // Runs function to change display of minutes if minutes are updated, or type of session changes.
  useEffect(() => {
    updateDisplayOfMinutes(
      play,
      typeOfSession,
      setMinutes,
      focusMinutes,
      restMinutes
    );
  }, [focusMinutes, restMinutes, typeOfSession]);

  // Offset app from the top based on the height of the status bar
  useEffect(() => {
    StatusBar.currentHeight && setStatusBarHeight(StatusBar.currentHeight);
  });

  return (
    <View
      style={[
        styles.pomodoro,
        { paddingTop: statusBarHeight },
        {
          backgroundColor: typeOfSession === "focus" ? focusColor : restColor,
        },
      ]}
    >
      <ToggleSession
        typeOfSession={typeOfSession}
        setTypeOfSession={setTypeOfSession}
      />
      <UpdateTimes
        focusMinutes={focusMinutes}
        restMinutes={restMinutes}
        setFocusMinutes={setFocusMinutes}
        setRestMinutes={setRestMinutes}
        setSeconds={setSeconds}
      />
      <Button
        title={play ? "Pause" : "Play"}
        onPress={() => setPlay((prev) => !prev)}
      />
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
  timerInput: {
    fontSize: 50,
  },
});

export default App;
