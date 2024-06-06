import { useState } from "react";

import useLocalStorage from "./useLocalStorage";
import "./style.css";

const LightDark = () => {
  const [mode, setMode] = useLocalStorage("theme", "dark");

  const handleToggleMode = () => {
    console.log("setmode invoked ");
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="ld-main" data-theme={mode}>
        <div className="ld-container">
          <p>Hello World</p>

          <button
            type="button"
            className={` btn ${
              mode == "dark" ? "btn-light" : "btn-dark"
            } ld-button`}
            onClick={handleToggleMode}
          >
            change theme
          </button>

          {/* <div class="grid text-center ld-grid">
            <div>Blue</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LightDark;
