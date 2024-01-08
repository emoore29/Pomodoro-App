import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type UpdateTimeInputProps = {
  label: string;
  defaultValue: string;
  onInputChange: (input: string) => void;
  onTickClick: () => void;
  editInProgress: boolean;
  setEditInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function UpdateTimeInput({
  label,
  defaultValue,
  onTickClick,
  editInProgress,
  setEditInProgress,
  inputValue,
  setInputValue,
}: UpdateTimeInputProps) {
  return (
    <View>
      <Button
        title={`Update ${label} time`}
        onPress={() => setEditInProgress((prev) => !prev)}
      />
      {editInProgress && (
        <View>
          <TextInput
            style={styles.timerInput}
            defaultValue={defaultValue}
            onChangeText={(input) => setInputValue(input)}
            placeholder={defaultValue}
            keyboardType="numeric"
          />
          <Button disabled={!inputValue} title="✔" onPress={onTickClick} />
          <Button title="✖" onPress={onTickClick} />
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
