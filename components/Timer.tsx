import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

type TimerProps = {
  minutes: number;
  seconds: number;
};

export default function Timer({ minutes, seconds }: TimerProps) {
  return (
    <View style={[styles.timerContainer]}>
      <Text style={styles.timerText}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  timerText: {
    fontSize: 40,
    color: "rgba(255, 255, 255, 0.5)",
  },
});
