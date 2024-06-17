import { useEffect } from "react";
import UseWindowResize from "./hook";

const WindowResize = () => {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;

  return (
    <>
      <center>
        <div className="use-resize-div">
          <h2>Window resize custom hook</h2>
          <p>width : {width}</p>
          <p>Height : {height}</p>
        </div>
      </center>
    </>
  );
};

export default WindowResize;
