import { useState } from "react";
import css from "./RandomColorGenerator.module.css";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("#3D69AA");
  const [colorType, setColorType] = useState("RGB");

  const GenerateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += data[GenerateRandom(data.length)];
    }

    setColor(hexColor);
  };

  const handleRGBColor = () => {
    let r = GenerateRandom(256);
    let g = GenerateRandom(256);
    let b = GenerateRandom(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  let bgColor = "white";
  return (
    <main className={` ${css.main}`} style={{ backgroundColor: color }}>
      <div className={`${css.button_container}`}>
        <button
          type="button"
          className={`btn btn-primary ${css.button} `}
          onClick={() => setColorType("Hex")}
        >
          Generate Hex color
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${css.button} `}
          onClick={() => setColorType("RGB")}
        >
          Generate RGB color
        </button>
        <button
          type="button"
          className={`btn btn-light ${css.button} `}
          onClick={colorType === "Hex" ? handleHexColor : handleRGBColor}
        >
          Generate random color
        </button>
      </div>
      <p className={`${css.para}`}>{colorType} Color is Generated</p>

      <div className={` ${css.Color_name} `}>{color}</div>
    </main>
  );
};
export default RandomColorGenerator;
