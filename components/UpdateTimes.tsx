import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

type UpdateTimesProps = {
  focusMinutes: number;
  restMinutes: number;
  setFocusMinutes: React.Dispatch<React.SetStateAction<number>>;
  setRestMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
};

export default function UpdateTimes({
  focusMinutes,
  restMinutes,
  setFocusMinutes,
  setRestMinutes,
  setSeconds,
}: UpdateTimesProps) {
  const [updateTimes, setUpdateTimes] = useState<boolean>(false);
  const [inputFocusMinutes, setInputFocusMinutes] = useState<string>("25");
  const [inputRestMinutes, setInputRestMinutes] = useState<string>("5");
  const [editingRest, setEditingRest] = useState(false);
  const [editingFocus, setEditingFocus] = useState(false);

  const handleTickClick = (id: string) => {
    if (id === "update-focus") {
      setFocusMinutes(parseInt(inputFocusMinutes));
      setSeconds(0);
      setEditingFocus(false);
    } else if (id === "update-rest") {
      setRestMinutes(parseInt(inputRestMinutes));
      setSeconds(0);
      setEditingRest(false);
    }
  };

  return (
    <View>
      <Button
        title={updateTimes ? "Done" : "Update times"}
        onPress={() => setUpdateTimes((prev) => !prev)}
      />
      {updateTimes && (
        <View>
          <TextInput
            style={styles.timerInput}
            defaultValue={focusMinutes.toString()}
            onChangeText={(input) => setInputFocusMinutes(input)}
            placeholder={focusMinutes.toString()}
            keyboardType="numeric"
          />
          <Button
            disabled={!inputFocusMinutes}
            title="✔"
            onPress={() => handleTickClick("update-focus")}
          />
          <Button title="✖" onPress={() => handleTickClick("update-focus")} />
          <TextInput
            style={styles.timerInput}
            defaultValue={restMinutes.toString()}
            onChangeText={(input) => setInputRestMinutes(input)}
            placeholder={restMinutes.toString()}
            keyboardType="numeric"
          />
          <Button
            disabled={!inputRestMinutes}
            title="✔"
            onPress={() => handleTickClick("update-rest")}
          />
          <Button title="✖" onPress={() => handleTickClick("update-rest")} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  timerInput: {
    fontSize: 50,
  },
});
