import { useContext } from "react";
import FeatureFlagGlobalState, { FeatureFlagsContext } from "./context";
import LightDark from "../8_light_dark_mode/LightDark";
import TicGame from "../14_tic_tac_toe_game";
import AccordionApp from "../1_accordion/AccordionApp";
import RandomColorGenerator from "../2_color_generator/RandomColorGenerator";
import TreeView from "../6_tree-view/TreeView";
import TabsTest from "../10_tabs/TabsTest";
const BuildComponents = () => {
  const { fetching, enableFlagsData } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDark></LightDark>,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicGame></TicGame>,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator></RandomColorGenerator>,
    },
    {
      key: "showAccordian",
      component: <AccordionApp></AccordionApp>,
    },
    {
      key: "showTreeView",
      component: <TreeView></TreeView>,
    },
    {
      key: "showTabs",
      component: <TabsTest></TabsTest>,
    },
  ];

  const checkComponent = (key) => {
    console.log("hi");
    return enableFlagsData[key];
  };

  if (fetching) {
    return <div className="fetching-msg">Data is Fetching</div>;
  }
  return (
    <>
      <div className="ff-main">
        <h1>Feature Flags</h1>
        <h3>Scroll Down</h3>
      </div>
      {componentsToRender.map((item, index) => (
        <div key={index}>
          {checkComponent(item.key) ? item.component : null}
        </div>
      ))}
    </>
  );
};

export default BuildComponents;
