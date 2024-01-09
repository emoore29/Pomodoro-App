import { View, StyleSheet } from "react-native";
import ToggleSession from "./ToggleSession";
import UpdateTimes from "./UpdateTimes";

type MenuProps = {
  typeOfSession: string;
  setTypeOfSession: React.Dispatch<React.SetStateAction<string>>;
  focusMinutes: number;
  restMinutes: number;
  setFocusMinutes: React.Dispatch<React.SetStateAction<number>>;
  setRestMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  statusBarHeight: number;
};

export default function Menu({
  typeOfSession,
  setTypeOfSession,
  focusMinutes,
  restMinutes,
  setFocusMinutes,
  setRestMinutes,
  setSeconds,
  statusBarHeight,
}: MenuProps) {
  return (
    <View style={[styles.menu, { top: statusBarHeight }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: 0,
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
  },
});
