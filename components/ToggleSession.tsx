import { Button, View, Text, Pressable, StyleSheet } from "react-native";

type ToggleSessionProps = {
  typeOfSession: string;
  setTypeOfSession: React.Dispatch<React.SetStateAction<string>>;
};

export default function ToggleSession({
  typeOfSession,
  setTypeOfSession,
}: ToggleSessionProps) {
  function updateSessionType() {
    if (typeOfSession == "focus") {
      setTypeOfSession("rest");
    } else {
      setTypeOfSession("focus");
    }
  }

  return (
    <View>
      <Pressable style={styles.button} onPress={updateSessionType}>
        <Text>Toggle session type: {typeOfSession}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "white",
  },
});
