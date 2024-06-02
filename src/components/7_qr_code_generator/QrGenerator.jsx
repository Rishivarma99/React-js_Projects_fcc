import { useRef, useState } from "react";
import "./style.css";
import QRCode from "qrcode.react";
import { generatePath } from "react-router-dom";

const QrGenerator = () => {
  const [qrcode, setqrcode] = useState("");
  const [input, setinput] = useState("");
  const [generate, setGenerate] = useState(false);
  const generateQr = () => {
    setGenerate(true);
    setqrcode(input);
    setinput("");
  };

  // let input = useRef(""); // cant remove the value after pressing the button

  return (
    <>
      <div className="qr-main">
        <h1>QR CODE GENERATOR</h1>
        <div className="qr-link">
          <input
            type="text"
            name="qr-link"
            id="qr-link"
            placeholder="Enter any Text"
            className="qr-input"
            onChange={(e) => setinput(e.target.value)}
            value={input}
          />
          <button
            type="button"
            className="btn btn-info"
            onClick={() => generateQr()}
          >
            Generate
          </button>
        </div>
        {generate == true && <h4>QR code Generated For Text : {qrcode}</h4>}

        <div>
          <QRCode
            id="qr-code-value"
            value={qrcode}
            className="qr-code"
            size={300}
          ></QRCode>
        </div>
      </div>
    </>
  );
};

export default QrGenerator;
