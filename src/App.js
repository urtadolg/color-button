import "./App.css";
import { useState } from "react";

function App() {
  const [buttonStyle, setButtonStyle] = useState("red");
  const [buttonLabel, setButtonLabel] = useState("Change to blue");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const onClickHandler = () => {
    if (buttonStyle == "red") {
      setButtonStyle("blue");
      setButtonLabel("Change to red");
    } else {
      setButtonStyle("red");
      setButtonLabel("Change to blue");
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
        style={{ backgroundColor: buttonStyle }}
      >
        {buttonLabel}
      </button>
      <input onClick={onCheckedHandler} type="checkbox" />
    </div>
  );
}

export default App;
