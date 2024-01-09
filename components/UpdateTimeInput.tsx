import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";

type UpdateTimeInputProps = {
  label: string;
  defaultValue: string;
  onInputChange: (input: string) => void;
  onTickClick: () => void;
  editInProgress: boolean;
  setEditInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  minutes: number;
};

export default function UpdateTimeInput({
  label,
  defaultValue,
  onTickClick,
  editInProgress,
  setEditInProgress,
  inputValue,
  setInputValue,
  minutes,
}: UpdateTimeInputProps) {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => setEditInProgress((prev) => !prev)}
      >
        <Text>
          Update {label} time: {minutes}
        </Text>
      </Pressable>
      {editInProgress && (
        <View>
          <TextInput
            style={styles.timerInput}
            defaultValue={defaultValue}
            onChangeText={(input) => setInputValue(input)}
            placeholder={defaultValue}
            keyboardType="numeric"
          />
          <Pressable
            style={styles.button}
            disabled={!inputValue}
            onPress={onTickClick}
          >
            <Text>✔</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onTickClick}>
            <Text>✖</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  timerInput: {
    fontSize: 30,
  },
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
