import { useState } from "react";
import "./style.css";
import Content1 from "./Content1";

const Tabs = ({ tabsArray }) => {
  // let tabsArray = Array(noOfTabs).fill(1); // CREATING AN ARRAY TO CREATE BUTTONS

  const [currentTabIndex, setIndex] = useState(0);
  const handleButton = (index) => {
    console.log(index);
    setIndex(index);
  };

  return (
    <>
      <div className="tabs-main">
        <div className="tabs-buttons-container">
          {tabsArray.map((_, index) => {
            return (
              <button
                className={`tabs-button ${
                  currentTabIndex === index ? "tabs-selected-tab" : ""
                } `}
                onClick={() => handleButton(index)}
                key={index}
              >
                {"Tab " + (index + 1)}
              </button>
            );
          })}
        </div>

        <div className="tabs-diplay-container">
          {/* no need to use map just apply logical statments according to use state  */}
          {tabsArray[currentTabIndex] && tabsArray[currentTabIndex].content}
        </div>
      </div>
    </>
  );
};

export default Tabs;
