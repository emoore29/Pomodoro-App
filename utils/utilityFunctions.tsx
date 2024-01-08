// Toggles session type
export function toggleSessionType(
  typeOfSession: string,
  setTypeOfSession: React.Dispatch<React.SetStateAction<string>>,
  setSeconds: React.Dispatch<React.SetStateAction<number>>
) {
  setSeconds(0);
  if (typeOfSession === "focus") {
    setTypeOfSession("rest");
  } else {
    setTypeOfSession("focus");
  }
}

// Updates timer display based on session type.
export function updateDisplayOfMinutes(
  play: boolean,
  typeOfSession: string,
  setMinutes: React.Dispatch<React.SetStateAction<number>>,
  focusMinutes: number,
  restMinutes: number
) {
  if (!play) {
    //can only update minutes if session is paused
    if (typeOfSession === "focus") {
      setMinutes(focusMinutes);
    } else {
      setMinutes(restMinutes);
    }
  }
}
