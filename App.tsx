import { StyleSheet, Text, View } from "react-native";

const PomodoroApp = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Text>Pomodoro app will be here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

export default PomodoroApp;
