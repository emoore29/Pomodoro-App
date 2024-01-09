import { useState } from "react";
import { Button, View } from "react-native";
import UpdateTimeInput from "./UpdateTimeInput";

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
  const [inputFocusMinutes, setInputFocusMinutes] = useState<string>("25");
  const [inputRestMinutes, setInputRestMinutes] = useState<string>("5");
  const [editFocusInProgress, setEditFocusInProgress] =
    useState<boolean>(false);
  const [editRestInProgress, setEditRestInProgress] = useState<boolean>(false);

  const handleTickClick = (id: string) => {
    if (id === "update-focus") {
      console.log("updating focus, input:", inputFocusMinutes);
      setFocusMinutes(parseInt(inputFocusMinutes));
      setSeconds(0);
      setEditFocusInProgress(false);
    } else if (id === "update-rest") {
      setRestMinutes(parseInt(inputRestMinutes));
      setSeconds(0);
      setEditRestInProgress(false);
    }
  };

  return (
    <View>
      <View>
        <UpdateTimeInput
          label="focus"
          defaultValue={focusMinutes.toString()}
          onInputChange={(input) => setInputFocusMinutes(input)}
          onTickClick={() => handleTickClick("update-focus")}
          editInProgress={editFocusInProgress}
          setEditInProgress={setEditFocusInProgress}
          inputValue={inputFocusMinutes}
          setInputValue={setInputFocusMinutes}
          minutes={focusMinutes}
        />
        <UpdateTimeInput
          label="rest"
          defaultValue={restMinutes.toString()}
          onInputChange={(input) => setInputRestMinutes(input)}
          onTickClick={() => handleTickClick("update-rest")}
          editInProgress={editRestInProgress}
          setEditInProgress={setEditRestInProgress}
          inputValue={inputRestMinutes}
          setInputValue={setInputRestMinutes}
          minutes={restMinutes}
        />
      </View>
    </View>
  );
}
