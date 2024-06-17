import { useRef, useState } from "react";
import UseOutSideCustomHook from ".";
import "./style.css";
const UseOutsideClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutSideCustomHook(ref, () => {
    setShowContent(false);
  });
  return (
    <center>
      <h2>Use Outside Click Custom Hook</h2>
      <div className="use-outside-main" ref={ref}>
        {showContent ? (
          <div className="use-outside-content-div">
            <h3>Just Click Outside The div to Close</h3>
            <p>This is some random content to show </p>
          </div>
        ) : (
          <button
            onClick={() => setShowContent(true)}
            className="btn btn-primary"
          >
            Show content
          </button>
        )}
      </div>
    </center>
  );
};

export default UseOutsideClick;
