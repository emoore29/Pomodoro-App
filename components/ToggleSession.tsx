import { Button, View } from "react-native";

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
      <Button title="Toggle session" onPress={updateSessionType} />
    </View>
  );
}
