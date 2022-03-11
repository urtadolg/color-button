import "./App.css";
import { useState } from "react";

export function formatColorName(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonStyle, setButtonStyle] = useState("mediumVioletRed");
  const [buttonLabel, setButtonLabel] = useState("Change to Midnight Blue");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const onClickHandler = () => {
    if (buttonStyle == "mediumVioletRed") {
      setButtonStyle("midnightBlue");
      setButtonLabel("Change to Medium Violet Red");
    } else {
      setButtonStyle("mediumVioletRed");
      setButtonLabel("Change to Midnight Blue");
    }
  };

  const onCheckedHandler = (e) => {
    e.target.checked == true ? setIsBtnDisabled(true) : setIsBtnDisabled(false);
  };

  return (
    <div>
      <button
        disabled={isBtnDisabled}
        onClick={onClickHandler}
        style={{ backgroundColor: isBtnDisabled ? "gray" : buttonStyle }}
      >
        {buttonLabel}
      </button>
      <label htmlFor="disableBtn">Disable button</label>
      <input id="disableBtn" onClick={onCheckedHandler} type="checkbox" />
    </div>
  );
}

export default App;
